import { IS_REQUIRED, ObjectValidator } from 'common-abstract-fares-system'

export class LoginReq {
  username: string = ''

  password: string = ''
}

export const LoginValidationSchema: ObjectValidator<LoginReq> = {
  username: IS_REQUIRED,
  password: IS_REQUIRED,
}

export type LoginReqError = Record<keyof LoginReq, string>
