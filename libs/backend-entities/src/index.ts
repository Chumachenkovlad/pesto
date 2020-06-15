import { CategoryModel } from './lib/category';
import { CommentModel } from './lib/comment';
import { PostModel } from './lib/post';
import { PostCategoryModel } from './lib/relations';
import { UserModel } from './lib/user';
import { VoteModel } from './lib/vote';

export * from './lib/category';
export * from './lib/comment';
export * from './lib/vote';
export * from './lib/relations';
export * from './lib/post';
export * from './lib/user';

export const MODELS = [
  UserModel,
  PostModel,
  VoteModel,
  CommentModel,
  CategoryModel,
  PostCategoryModel,
  VoteModel,
];
