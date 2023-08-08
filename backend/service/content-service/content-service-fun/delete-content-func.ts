import { ContentRepository } from '@/backend/repository/content-repository/content-repositoty'
import { CommonResponse } from 'common-abstract-fares-system'
import mongoose from 'mongoose'

/*
    @ericchen:

    put your explanation here
*/

export const deleteContentsFunc = async (
  ids: string,
  repository: ContentRepository
): Promise<CommonResponse<string>> => {
  const invalidParamRes = {
    success: false,
    message: 'invalid params',
    result: '',
    status: 400,
  }
  if (!ids) {
    return invalidParamRes
  }
  const listId = ids.split(',')
  const filteredIds = listId.filter((item) => {
    if (!mongoose.isValidObjectId(item)) {
      return false
    }
    return true
  })
  if (filteredIds.length === 0) {
    return invalidParamRes
  }
  const { error } = await repository.delete(filteredIds)
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
