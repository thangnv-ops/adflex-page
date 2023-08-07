import {
  CommonResponse,
  comparePassword,
  decodeBase64,
  generateUserToken,
  sendEmail,
  validate,
} from 'common-abstract-fares-system'
import { LoginReq, LoginReqError, LoginValidationSchema } from '../login-req'

import { UserRepository } from '@/backend/repository/user-repository/user-repository'
import { v4 as uuidv4 } from 'uuid'
import { LoginRes } from '../login-res'

/*
    @ericchen:

    put your explanation here
*/

const smtpOption = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'user',
    pass: process.env.SMTP_PASSWORD || 'password',
  },
}

export const loginFunction = async (
  loginReq: LoginReq,
  repository: UserRepository
): Promise<CommonResponse<LoginReqError | LoginRes | string>> => {
  const validateRes = await validate(loginReq, LoginValidationSchema)
  if (validateRes.isError) {
    return {
      success: false,
      message: '',
      status: 400,
      result: validateRes.error,
    }
  }
  const findUsername = await repository.findOne('username', loginReq.username)
  if (!findUsername.result) {
    return {
      success: false,
      message: '',
      result: {
        username: 'not found user name',
        password: '',
      },
      status: 400,
    }
  }
  const comparePassResult = await comparePassword(
    decodeBase64(loginReq.password),
    findUsername.result.password
  )
  if (!comparePassResult) {
    return {
      success: false,
      message: '',
      result: {
        username: '',
        password: 'wrong password',
      },
      status: 400,
    }
  }
  if (findUsername.result.twoFactor) {
    const findMinutesLater = new Date()
    findMinutesLater.setMinutes(findMinutesLater.getMinutes() + 5)
    const code = uuidv4()
    await sendEmail(smtpOption, 'fares.sys.vn@gmail.com', {
      to: findUsername.result.email,
      subject: 'login code',
      html: `<p>${code}</p>`,
    })
    await repository.update([
      {
        ...findUsername.result,
        code,
        codeExpired: findMinutesLater,
      },
    ])
    return {
      success: true,
      message: 'sent login code to your email!',
      result: 'ok',
      status: 200,
    }
  }
  const token = generateUserToken({ userId: findUsername.result._id.toString() })
  await repository.update([
    {
      ...findUsername.result,
      token,
    },
  ])
  return {
    success: true,
    message: 'success!',
    result: {
      token,
    },
    status: 200,
  }
}
