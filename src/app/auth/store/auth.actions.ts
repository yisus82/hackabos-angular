import { LoginRequest, LoginResponse, RegisterRequest, Auth } from '../auth.models';
import { Error } from 'src/app/error/error.models';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public login: LoginRequest) {}
}

export class LoginSuccess {
  static readonly type = '[Auth] LoginSuccess';
  constructor(public loginResponse: LoginResponse) {}
}

export class LoginFailed {
  static type = '[Auth] LoginFailed';
  constructor(public errors: Error[]) {}
}

export class Logout {
  static type = '[Auth] Logout';
}

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public register: RegisterRequest) {}
}

export class RegisterSuccess {
  static readonly type = '[Auth] RegisterSuccess';
}

export class RegisterFailed {
  static type = '[Auth] RegisterFailed';
  constructor(public errors: Error[]) {}
}

export class GetUserProfile {
  static readonly type = '[Auth] GetUserProfile';
}

export class GetUserProfileSuccess {
  static readonly type = '[Auth] GetUserProfileSuccess';
  constructor(public profile: Auth) {}
}

export class GetUserProfileFailed {
  static type = '[Auth] GetUserProfileFailed';
  constructor(public error: Error[]) {}
}
