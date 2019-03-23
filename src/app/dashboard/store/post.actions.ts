import { PostResponse } from '../dashboard.models';
import { Error } from 'src/app/error/error.models';

export class GetPosts {
  static readonly type = '[Dashboard] GetPosts';
  constructor() {}
}

export class GetPostsSuccess {
  static readonly type = '[Dashboard] GetPostsSuccess';
  constructor(public posts: PostResponse[]) {}
}

export class GetPostsFailed {
  static readonly type = '[Dashboard] GetPostsFailes';
  constructor(public errors: Error[]) {}
}
