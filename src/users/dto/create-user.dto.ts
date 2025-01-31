export class VerifyEmailDto {
  signupVerifyToken: string;
}
export class CreateUserDto {
  readonly name: string;
  readonly email: string;
  readonly password: string;
}
export class UserLoginDDto {
  email: string;
  password: string;
}

export interface UserInfo {
  id: string;
  name: string;
  email: string;
}
