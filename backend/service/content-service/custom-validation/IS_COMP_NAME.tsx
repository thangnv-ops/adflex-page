import { ContentRepository } from '@/backend/repository/content-repository/content-repositoty'
import { TValidateFunction } from 'common-abstract-fares-system/lib/validation-tool/type-validation'

export const IS_COMP_NAME: TValidateFunction = async <T extends object>(
  error: Record<keyof T, string>,
  value: any,
  key: keyof T,
  params?: any
) => {
  if (!value) {
    return { ...error, [key]: 'required' }
  }
  const repository = new ContentRepository()
  const findName = await repository.findOne('componentName', value)
  if (findName.result) {
    if (!!params?.id && params?.id !== findName.result._id.toString()) {
      return {
        ...error,
        componentName: 'component name existed',
      }
    }
    if (!params?.id) {
      return {
        ...error,
        componentName: 'component name existed',
      }
    }
  }
  return { ...error, [key]: '' }
}
