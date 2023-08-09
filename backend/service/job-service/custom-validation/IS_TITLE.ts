import { JobRepository } from '@/backend/repository/job-repository/job-repository'
import { TValidateFunction } from 'common-abstract-fares-system/lib/validation-tool/type-validation'

export const IS_TITLE: TValidateFunction = async <T extends object>(
  error: Record<keyof T, string>,
  value: any,
  key: keyof T,
  params?: any
) => {
  if (!value) {
    return { ...error, [key]: 'required' }
  }
  const repository = new JobRepository()
  const findName = await repository.findOne('title', value)
  if (findName.result) {
    if (!!params?.id && params?.id !== findName.result._id.toString()) {
      return {
        ...error,
        title: 'title name existed',
      }
    }
    if (!params?.id) {
      return {
        ...error,
        title: 'title name existed',
      }
    }
  }
  return { ...error, [key]: '' }
}
