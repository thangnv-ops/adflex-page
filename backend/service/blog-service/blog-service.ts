import { Blog } from '@/backend/repository/blog-repository/blog-entity'
import { BlogRepository } from '@/backend/repository/blog-repository/blog-repository'
import { CommonListResult, CommonResponse, CommonService } from 'common-abstract-fares-system'
import { NextApiRequest } from 'next'
import { BlogReq, BlogRequestError } from './blog-req'
import { BlogRes } from './blog-res'
import {
  addNewBlogFunc,
  deleteBlogFunc,
  getListBlogFunc,
  updateBlogFunc,
} from './blog-service-func'

export class BlogService extends CommonService<BlogRepository> {
  constructor() {
    super(new BlogRepository())
  }

  public async getListBlogs(
    req: NextApiRequest
  ): Promise<CommonResponse<CommonListResult<BlogRes> | string>> {
    return await getListBlogFunc(
      req,
      this.repository,
      this.getPageAndSize,
      this.generatePipelineAggregate(req.query, new Blog())
    )
  }

  public async addNewBlog(req: NextApiRequest): Promise<CommonResponse<BlogRequestError | string>> {
    return await addNewBlogFunc(req.body, this.repository, req.query)
  }

  public async updateBlog(
    req: BlogReq,
    id: string
  ): Promise<CommonResponse<BlogRequestError | string>> {
    return await updateBlogFunc(req, id, this.repository)
  }

  public async deleteBlog(ids: string): Promise<CommonResponse<string>> {
    return await deleteBlogFunc(ids, this.repository)
  }
}
