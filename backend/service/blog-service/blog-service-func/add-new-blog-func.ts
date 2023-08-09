import { CommonResponse, convertValue, validate } from 'common-abstract-fares-system'

import { Blog } from '@/backend/repository/blog-repository/blog-entity'
import { BlogRepository } from '@/backend/repository/blog-repository/blog-repository'
import { BlogReq, BlogReqValidation, BlogRequestError } from '../blog-req'

export const addNewBlogFunc = async (
  req: BlogReq,
  repository: BlogRepository,
  query: any
): Promise<CommonResponse<BlogRequestError | string>> => {
  const validateRes = await validate(req, BlogReqValidation, query)
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const entity = convertValue<Blog>(req, new Blog())
  const { error } = await repository.insert([
    { ...entity, tags: req.tags.filter((item) => item.length > 0) },
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
