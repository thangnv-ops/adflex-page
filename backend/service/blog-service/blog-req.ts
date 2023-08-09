import { IS_REQUIRED, ObjectValidator } from 'common-abstract-fares-system'
import { IS_SLUG } from './custom-validation/IS_SLUG'
import { IS_TITLE } from './custom-validation/IS_TITLE'

export class BlogReq {
  thumbnail: string = ''

  title: string = ''

  slug: string = ''

  shortDescription: string = ''

  content: string = ''

  tags: string[] = []
}

export type BlogRequestError = Record<keyof BlogReq, string>

export const BlogReqValidation: ObjectValidator<BlogReq> = {
  thumbnail: IS_REQUIRED,
  title: IS_TITLE,
  slug: IS_SLUG,
  shortDescription: IS_REQUIRED,
  content: IS_REQUIRED,
  tags: IS_REQUIRED,
}
