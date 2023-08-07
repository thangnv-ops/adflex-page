import { CommonResponse, convertValue, hashPassword, validate } from 'common-abstract-fares-system'
import { UserReq, UserReqError, UserValidatorSchema } from '../user-req'

import { User } from '@/backend/repository/user-repository/user-entity'
import { UserRepository } from '@/backend/repository/user-repository/user-repository'

/*
    @ericchen:

    put your explanation here
*/

export const addNewUserFunction = async (
  req: UserReq,
  repository: UserRepository,
  query: any
): Promise<CommonResponse<UserReqError | string>> => {
  const validateRes = await validate(req, UserValidatorSchema, query)
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const entity = convertValue<User>(req, new User())
  const password = await hashPassword(process.env.DEFAULT_PASSWORD || '')
  const { error } = await repository.insert([{ ...entity, password }])
  if (error) {
    return {
      status: 500,
      message: error || '',
      result: '',
      success: false,
    }
  }
  return {
    status: 200,
    message: 'ok',
    result: '',
    success: true,
  }
}
