export class TokenDto {
  constructor(public readonly token: string) {}
}
export class LoginForm {
  constructor(public readonly email: string, public readonly password: string) {}
}

export interface RegisterForm {
  fullName: string,
  email: string,
  password: string,
  avatarUrl?: string,
}

