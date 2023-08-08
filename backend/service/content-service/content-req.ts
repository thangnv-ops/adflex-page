import { IS_REQUIRED, ObjectValidator } from 'common-abstract-fares-system'

export class ContentReq {
  route: string = ''

  componentName: string = ''

  content: string[] = []
}

export const ContentReqValidation: ObjectValidator<ContentReq> = {
  route: IS_REQUIRED,
  componentName: IS_REQUIRED,
  content: IS_REQUIRED,
}

export type ContentReqError = Record<keyof ContentReq, string>
