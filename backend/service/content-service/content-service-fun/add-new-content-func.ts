import { CommonResponse, convertValue, validate } from 'common-abstract-fares-system'
import { ContentReq, ContentReqError, ContentReqValidation } from '../content-req'

import { Content } from '@/backend/repository/content-repository/content-entity'
import { ContentRepository } from '@/backend/repository/content-repository/content-repositoty'

export const addNewContentFunc = async (
  req: ContentReq,
  repository: ContentRepository,
  query: any
): Promise<CommonResponse<ContentReqError | string>> => {
  const validateRes = await validate(req, ContentReqValidation, query)
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const entity = convertValue<Content>(req, new Content())
  const { error } = await repository.insert([{ ...entity }])
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
