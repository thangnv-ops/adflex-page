import { Blog, BlogSchema } from './blog-entity'

import { CommonRepository } from 'common-abstract-fares-system'

export class BlogRepository extends CommonRepository<Blog> {
  constructor() {
    super(BlogSchema, 'blogs')
  }
}
