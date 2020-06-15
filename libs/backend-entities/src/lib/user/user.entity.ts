import { IUser } from '@pesto/public-interfaces';
import { EntityErrorsCodes, IsUUID4, LengthValidator, Required } from '@pesto/shared';
import * as crypto from 'crypto';
import {
    BeforeCreate,
    BeforeUpdate,
    Column,
    DataType,
    Default,
    DefaultScope,
    HasMany,
    IsUrl,
    Model,
    PrimaryKey,
    Scopes,
    Table
} from 'sequelize-typescript';

import { CommentModel } from '../comment/comment.entity';
import { PostModel } from '../post/post.entity';
import { VoteModel } from '../vote/vote.entity';

const DEFAULT_BYTE_SIZE = 16;
const DEFAULT_ITERATIONS = 10000;
const DEFAULT_KEY_LENGTH = 64;

@DefaultScope({
  attributes: ['id', 'lastName', 'firstName', 'avatarUrl'],
  order: [['lastName', 'DESC']],
})
@Scopes({
  full: {
    include: [() => PostModel, () => CommentModel, () => VoteModel],
  },
})
@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true,
})
export class UserModel extends Model<UserModel> implements IUser {
  @PrimaryKey
  @IsUUID4
  @Column
  id: string;

  @LengthValidator(2, 100)
  @Required
  @Column
  firstName: string;

  @LengthValidator(2, 100)
  @Required
  @Column
  lastName: string;

  @Default('')
  @IsUrl
  @Column
  avatarUrl: string;

  @Column({
    type: DataType.STRING(45),
    unique: { name: 'unique_email_id', msg: EntityErrorsCodes.UNIQUE },
    validate: {
      isEmail: { msg: EntityErrorsCodes.INVALID_EMAIL },
      notEmpty: { msg: EntityErrorsCodes.REQUIRED },
    },
  })
  email: string;

  @Required
  @Column({ type: DataType.VIRTUAL })
  password: string;

  @HasMany(() => VoteModel, 'authorId')
  votes: VoteModel[];

  @HasMany(() => PostModel, 'authorId')
  posts: PostModel[];

  @HasMany(() => CommentModel, 'authorId')
  comments: CommentModel[];

  @Column
  hashedPassword: string;

  @Column
  salt: string;

  @BeforeCreate
  static async createPassword(user: UserModel) {
    await user._updatePassword();
  }

  @BeforeUpdate
  static async updatePassword(user: UserModel) {
    if (user.changed('password')) {
      await user._updatePassword();
    }
  }

  authenticate(password: string): boolean {
    return this.hashedPassword === this.encryptPassword(password);
  }

  private encryptPassword(password: string): string {
    const salt = new Buffer(this.salt, 'base64');
    return crypto
      .pbkdf2Sync(
        password,
        salt,
        DEFAULT_ITERATIONS,
        DEFAULT_KEY_LENGTH,
        'sha512'
      )
      .toString('base64');
  }

  private async makeSalt(): Promise<string> {
    return crypto.randomBytes(DEFAULT_BYTE_SIZE).toString('base64');
  }

  private async _updatePassword() {
    if (this.password) {
      this.salt = await this.makeSalt();
      this.hashedPassword = this.encryptPassword(this.password);
    }
  }
}
