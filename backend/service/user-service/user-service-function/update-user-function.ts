import { CommonResponse, validate } from 'common-abstract-fares-system'
import { UserReq, UserReqError, UserValidatorSchema } from '../user-req'

import { UserRepository } from '@/backend/repository/user-repository/user-repository'
import mongoose from 'mongoose'

/*
    @ericchen:

    put your explanation here
*/

export const updateUserFunction = async (
  req: UserReq,
  id: string,
  repository: UserRepository
): Promise<CommonResponse<UserReqError | string>> => {
  const validateRes = await validate(req, UserValidatorSchema, { id })
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const res = {
    success: false,
    message: '',
    result: {
      name: '',
      username: '',
      email: '',
      phone: '',
    },
    status: 400,
  }
  if (!id || !mongoose.isValidObjectId(id)) {
    return {
      ...res,
      message: 'invalid user id',
    }
  }
  const findUser = await repository.findOne('_id', new mongoose.Types.ObjectId(id))
  if (!findUser.result) {
    return {
      success: false,
      message: 'not found user',
      result: '',
      status: 404,
    }
  }
  const { error } = await repository.update([{ ...findUser.result, ...req }])
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
