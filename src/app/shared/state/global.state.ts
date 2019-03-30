import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  Login,
  Register,
  UpdateUserProfile,
  LoginSuccess,
  RegisterSuccess,
  LoginFailed,
  UpdateUserProfileSuccess,
  RegisterFailed,
  UpdateUserProfileFailed
} from '../../auth/store/auth.actions';
import {
  AddPost,
  AddCommentSuccess,
  AddPostSuccess,
  AddPostFailed,
  AddComment,
  AddCommentFailed
} from '../../dashboard/store/post.actions';
import { Global } from '../shared.models';

@State<Global>({
  name: 'global',
  defaults: {
    isFetching: false
  }
})
export class GlobalState {
  @Selector()
  static isFetching({ isFetching }: Global) {
    return isFetching;
  }

  @Action([Login, Register, AddPost, AddComment, UpdateUserProfile])
  startFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: true });
  }

  @Action([
    LoginSuccess,
    RegisterSuccess,
    AddPostSuccess,
    AddCommentSuccess,
    UpdateUserProfileSuccess,
    LoginFailed,
    RegisterFailed,
    AddPostFailed,
    AddCommentFailed,
    UpdateUserProfileFailed
  ])
  endFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: false });
  }
}
