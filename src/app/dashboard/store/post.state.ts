import { State, Store, Action, StateContext } from '@ngxs/store';
import { PostService } from '../services/post.service';
import {
  GetPosts,
  GetPostsSuccess,
  GetPostsFailed,
  AddPostFailed,
  AddCommentFailed,
  AddPost,
  AddPostSuccess
} from './post.action';
import { tap, catchError } from 'rxjs/operators';
import { Post } from '../dashboard.models';
import { flushModuleScopingQueueAsMuchAsPossible } from '@angular/core/src/render3/jit/module';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

@State<Post[]>({
  name: 'posts',
  defaults: []
})
export class PostState {
  constructor(private postService: PostService, private store: Store) {}

  @Action(GetPosts)
  getPosts({ dispatch }: StateContext<Post[]>) {
    return this.postService.getWall().pipe(
      tap(posts => dispatch(new GetPostsSuccess(posts))),
      catchError(error => dispatch(new GetPostsFailed(error.error)))
    );
  }

  @Action(GetPostsSuccess)
  getPostsSuccess(
    { setState }: StateContext<Post[]>,
    { posts }: GetPostsSuccess
  ) {
    setState(
      posts.sort((p1, p2) => {
        return p2.createdAt - p1.createdAt;
      })
    );
  }

  @Action(AddPost)
  addMiguel({ dispatch }: StateContext<Post[]>, { postRequest }: AddPost) {
    const currentUser = this.store.selectSnapshot(state => state.auth);

    return this.postService.addPost(postRequest.content).pipe(
      tap(post =>
        dispatch(
          new AddPostSuccess({
            ...post,
            author: currentUser,
            owner: currentUser
          })
        )
      ),
      catchError(error => dispatch(new AddPostFailed(error.error)))
    );
  }

  @Action(AddPostSuccess)
  addMiguelSuccess(
    { setState, getState }: StateContext<Post[]>,
    { post }: AddPostSuccess
  ) {
    setState([post, ...getState()]);
  }

  @Action([GetPostsFailed, AddPostFailed, AddCommentFailed])
  errors(ctx: StateContext<Post[]>, { errors }: GetPostsFailed) {
    console.log(errors);
  }
}
