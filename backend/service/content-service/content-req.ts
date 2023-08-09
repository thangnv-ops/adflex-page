import { IS_REQUIRED, ObjectValidator } from 'common-abstract-fares-system'

import { IS_COMP_NAME } from './custom-validation/IS_COMP_NAME'

export class ContentReq {
  route: string = ''

  componentName: string = ''

  content: string[] = []
}

export const ContentReqValidation: ObjectValidator<ContentReq> = {
  route: IS_REQUIRED,
  componentName: IS_COMP_NAME,
  content: IS_REQUIRED,
}

export type ContentReqError = Record<keyof ContentReq, string>
