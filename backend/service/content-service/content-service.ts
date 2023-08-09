import { CommonListResult, CommonResponse, CommonService } from 'common-abstract-fares-system'
import { ContentReq, ContentReqError } from './content-req'
import {
  addNewContentFunc,
  deleteContentsFunc,
  getListContentsFunc,
  updateContentFunc,
} from './content-service-fun'

import { Content } from '@/backend/repository/content-repository/content-entity'
import { ContentRepository } from '@/backend/repository/content-repository/content-repositoty'
import { NextApiRequest } from 'next'
import { ContentRes } from './content-res'

export class ContentService extends CommonService<ContentRepository> {
  constructor() {
    super(new ContentRepository())
  }

  public async getListContents(
    req: NextApiRequest
  ): Promise<CommonResponse<CommonListResult<ContentRes> | string>> {
    return await getListContentsFunc(
      req,
      this.repository,
      this.getPageAndSize,
      this.generatePipelineAggregate(req.query, new Content())
    )
  }

  public async addNewContent(
    req: NextApiRequest
  ): Promise<CommonResponse<ContentReqError | string>> {
    return await addNewContentFunc(req.body, this.repository, req.query)
  }

  public async updateContent(
    req: ContentReq,
    id: string
  ): Promise<CommonResponse<ContentReqError | string>> {
    return await updateContentFunc(req, id, this.repository)
  }

  public async deleteContent(ids: string): Promise<CommonResponse<string>> {
    return await deleteContentsFunc(ids, this.repository)
  }
}
