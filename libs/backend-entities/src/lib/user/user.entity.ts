import { IUser } from '@pesto/public-interfaces';
import { EntityErrorsCodes } from '@pesto/shared';
import * as crypto from 'crypto';
import {
  AllowNull,
  BeforeCreate,
  BeforeUpdate,
  Column,
  DataType,
  IsUrl,
  IsUUID,
  Length,
  Model,
  NotEmpty,
  PrimaryKey,
  Table
} from 'sequelize-typescript';


const DEFAULT_BYTE_SIZE = 16;
const DEFAULT_ITERATIONS = 10000;
const DEFAULT_KEY_LENGTH = 64;

@Table({
  tableName: 'users',
  timestamps: true,
  paranoid: true
})
export class User extends Model<User> implements IUser {
  @PrimaryKey
  @IsUUID(4)
  @Column
  id: string;

  @Length({ min: 2, max: 100, msg: EntityErrorsCodes.LENGTH })
  @NotEmpty({ msg: EntityErrorsCodes.REQUIRED })
  @Column
  firstName: string;

  @Length({ min: 2, max: 100, msg: EntityErrorsCodes.LENGTH })
  @NotEmpty({ msg: EntityErrorsCodes.REQUIRED })
  @Column
  lastName: string;


  @AllowNull(true)
  @IsUrl
  @Column
  avatarUrl: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(45),
    unique: { name: 'unique_email_id', msg: EntityErrorsCodes.UNIQUE },
    validate: {
      isEmail: { msg: EntityErrorsCodes.INVALID_EMAIL },
      notEmpty: { msg: EntityErrorsCodes.REQUIRED }
    }
  })
  email: string;

  @AllowNull(false)
  @Column({
    type: DataType.VIRTUAL,
    validate: {
      notEmpty: { msg: EntityErrorsCodes.REQUIRED }
    }
  })
  password: string;

  @Column
  hashedPassword: string;

  @Column
  salt: string;

  @BeforeCreate
  static async createPassword(user: User) {
    await user._updatePassword();
  }

  @BeforeUpdate
  static async updatePassword(user: User) {
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
