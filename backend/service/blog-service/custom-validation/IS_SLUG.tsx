import { BlogRepository } from '@/backend/repository/blog-repository/blog-repository'
import { TValidateFunction } from 'common-abstract-fares-system/lib/validation-tool/type-validation'

export const IS_SLUG: TValidateFunction = async <T extends object>(
  error: Record<keyof T, string>,
  value: any,
  key: keyof T,
  params?: any
) => {
  if (!value) {
    return { ...error, [key]: 'required' }
  }
  const repository = new BlogRepository()
  const findSlug = await repository.findOne('slug', value)
  if (findSlug.result) {
    if (!!params?.id && params?.id !== findSlug.result._id.toString()) {
      return {
        ...error,
        slug: 'slug existed',
      }
    }
    if (!params?.id) {
      return {
        ...error,
        slug: 'slug existed',
      }
    }
  }
  return { ...error, [key]: '' }
}
