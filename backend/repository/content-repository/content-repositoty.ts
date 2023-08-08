import { Content, ContentSchema } from './content-entity'

import { CommonRepository } from 'common-abstract-fares-system'

export class ContentRepository extends CommonRepository<Content> {
  constructor() {
    super(ContentSchema, 'contents')
  }
}
