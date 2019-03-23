import { State, Store, Action, StateContext, Selector } from '@ngxs/store';
import { PostCollection } from '../dashboard.models';
import { PostService } from '../services/post.service';
import { GetPosts, GetPostsSuccess, GetPostsFailed } from './post.actions';
import { tap, catchError } from 'rxjs/operators';

@State<PostCollection>({
  name: 'posts',
  defaults: {}
})
export class PostState {
  @Selector()
  static getPost(state: PostCollection) {
    return Object.values(state);
  }

  constructor(private store: Store, private postService: PostService) {}

  @Action(GetPosts)
  getPosts({ dispatch }: StateContext<PostCollection>) {
    return this.postService.getWall().pipe(
      tap(posts => dispatch(new GetPostsSuccess(posts))),
      catchError(error => dispatch(new GetPostsFailed(error.error)))
    );
  }

  @Action(GetPostsSuccess)
  getPostsSuccess({ setState }: StateContext<PostCollection>, { posts }: GetPostsSuccess) {
    setState(
      posts
        .sort((post1, post2) => post2.createdAt - post1.createdAt)
        .reduce((draft, post) => {
          draft[post.id] = post;
          return draft;
        }, {})
    );
  }

  @Action(GetPostsFailed)
  errors(ctx: StateContext<PostCollection>, { errors }: GetPostsFailed) {
    console.log(errors);
  }
}
