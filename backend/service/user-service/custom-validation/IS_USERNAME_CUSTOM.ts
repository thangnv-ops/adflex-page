import { UserRepository } from '@/backend/repository/user-repository/user-repository'
import { TValidateFunction } from 'common-abstract-fares-system/lib/validation-tool/type-validation'

export const IS_USERNAME_CUSTOM: TValidateFunction = async <T extends object>(
  error: Record<keyof T, string>,
  value: any,
  key: keyof T,
  params?: any
) => {
  if (!value) {
    return { ...error, [key]: 'required' }
  }
  const newValue = String(value)
  const USERNAME_REGEX = /^[a-zA-Z0-9\\._\\-]{3,}$/g

  if (!newValue.match(USERNAME_REGEX)) {
    return { ...error, [key]: 'invalid username' }
  }
  const repository = new UserRepository()
  const findUsername = await repository.findOne('username', value)
  if (findUsername.result) {
    if (!!params?.id && params?.id !== findUsername.result._id.toString()) {
      return {
        ...error,
        username: 'username existed',
      }
    }
    if (!params?.id) {
      return {
        ...error,
        username: 'username existed',
      }
    }
  }
  return { ...error, [key]: '' }
}
