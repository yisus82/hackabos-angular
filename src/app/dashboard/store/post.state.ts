import { State, Store, Action, StateContext } from '@ngxs/store';
import { PostService } from '../services/post.service';
import {
  GetPosts,
  GetPostsSuccess,
  GetPostsFailed,
  AddPostFailed,
  AddCommentFailed,
  AddPost,
  AddPostSuccess,
  AddComment,
  AddCommentSuccess
} from './post.action';
import { tap, catchError } from 'rxjs/operators';
import { Post } from '../dashboard.models';
import { flushModuleScopingQueueAsMuchAsPossible } from '@angular/core/src/render3/jit/module';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { SetErrors } from 'src/app/error/store/error.actions';

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
  getPostsSuccess({ setState }: StateContext<Post[]>, { posts }: GetPostsSuccess) {
    setState(
      posts.sort((p1, p2) => {
        return p2.createdAt - p1.createdAt;
      })
    );
  }

  @Action(AddPost)
  addPost({ dispatch }: StateContext<Post[]>, { postRequest }: AddPost) {
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
  addPostSuccess({ setState, getState }: StateContext<Post[]>, { post }: AddPostSuccess) {
    setState([post, ...getState()]);
  }

  @Action(AddComment)
  addComment({ dispatch }: StateContext<Post[]>, { postId, message }: AddComment) {
    const currentUser = this.store.selectSnapshot(state => state.auth);

    return this.postService.addComment(postId, message).pipe(
      tap(() =>
        dispatch(
          new AddCommentSuccess(
            {
              author: currentUser,
              message,
              createdAt: new Date().getTime(),
              id: this.uuidv4()
            },
            postId
          )
        )
      ),
      catchError(error => dispatch(new AddPostFailed(error.error)))
    );
  }

  @Action(AddCommentSuccess)
  addCommentSucess(
    { setState, getState }: StateContext<Post[]>,
    { comment, postId }: AddCommentSuccess
  ) {
    setState(
      getState().map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [comment, ...post.comments]
          };
        }
        return post;
      })
    );
  }

  @Action([GetPostsFailed, AddPostFailed, AddCommentFailed])
  error({ dispatch }: StateContext<Post[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

  private uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      // tslint:disable-next-line: no-bitwise
      const r = (Math.random() * 16) | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
}
