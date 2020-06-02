import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from '@pesto/backend-entities';

import { CommentsModelService } from './comments-model.service';

@Module({
    imports: [SequelizeModule.forFeature([Comment])],
    providers: [CommentsModelService],
    exports: [SequelizeModule, CommentsModelService]
})
export class CommentsModelModule {}
