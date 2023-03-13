export class TokenDto {
  constructor(public readonly token: string) {}
}
export class LoginForm {
  constructor(public readonly email: string, public readonly password: string) {}
}
