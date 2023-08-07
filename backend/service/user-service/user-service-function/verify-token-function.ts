import { CommonResponse, convertValue, validateUserToken } from 'common-abstract-fares-system'

import { User } from '@/backend/repository/user-repository/user-entity'
import { UserRepository } from '@/backend/repository/user-repository/user-repository'
import mongoose from 'mongoose'

/*
    @ericchen:

    put your explanation here
*/
export const verifyTokenFunction = async (
  userToken: string,
  repository: UserRepository
): Promise<CommonResponse<User | string>> => {
  try {
    const decoded = validateUserToken(userToken.split(' ')[1])
    if (!decoded || !decoded.userId) {
      return {
        status: 401,
        message: 'invalid token',
        success: false,
        result: '',
      }
    }
    const findUser = await repository.findOne('_id', new mongoose.Types.ObjectId(decoded.userId))
    if (findUser.error) {
      return {
        status: 401,
        message: String(findUser.error),
        success: false,
        result: '',
      }
    }
    if (!findUser.result) {
      return {
        status: 401,
        message: 'invalid user',
        success: false,
        result: '',
      }
    }
    if (findUser.result.token !== userToken) {
      return {
        status: 401,
        message: 'invalid user',
        success: false,
        result: '',
      }
    }
    return {
      status: 200,
      success: true,
      message: 'valid',
      result: convertValue(findUser.result, new User()),
    }
  } catch (err) {
    return {
      status: 401,
      message: String(err),
      success: false,
      result: '',
    }
  }
}
