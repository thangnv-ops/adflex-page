import { CommonResponse, validate } from 'common-abstract-fares-system'

import { BlogRepository } from '@/backend/repository/blog-repository/blog-repository'
import mongoose from 'mongoose'
import { BlogReq, BlogReqValidation, BlogRequestError } from '../blog-req'

export const updateBlogFunc = async (
  req: BlogReq,
  id: string,
  repository: BlogRepository
): Promise<CommonResponse<BlogRequestError | string>> => {
  const validateRes = await validate(req, BlogReqValidation, { id })
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
      thumbnail: '',
      title: '',
      shortDescription: '',
      createdDate: '',
      content: '',
      tags: '',
      slug: '',
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
  const { error } = await repository.update([
    { ...findContent.result, ...req, tags: req.tags.filter((item) => item.length > 0) },
  ])
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
