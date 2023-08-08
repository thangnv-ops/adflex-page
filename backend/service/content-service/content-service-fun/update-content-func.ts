import { CommonResponse, validate } from 'common-abstract-fares-system'
import { ContentReq, ContentReqError, ContentReqValidation } from '../content-req'

import { ContentRepository } from '@/backend/repository/content-repository/content-repositoty'
import mongoose from 'mongoose'

export const updateContentFunc = async (
  req: ContentReq,
  id: string,
  repository: ContentRepository
): Promise<CommonResponse<ContentReqError | string>> => {
  const validateRes = await validate(req, ContentReqValidation, { id })
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
      route: '',
      componentName: '',
      content: '',
    },
    status: 400,
  }
  if (!id || !mongoose.isValidObjectId(id)) {
    return {
      ...res,
      message: 'invalid user id',
    }
  }
  const findContent = await repository.findOne('_id', new mongoose.Types.ObjectId(id))
  if (!findContent.result) {
    return {
      success: false,
      message: 'not found user',
      result: '',
      status: 404,
    }
  }
  const { error } = await repository.insert([{ ...findContent.result, ...req }])
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
