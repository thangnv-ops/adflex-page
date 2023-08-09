import { CommonListResult, CommonResponse, CommonService } from 'common-abstract-fares-system'
import { addNewJobFunc, deleteJobFunc, getListJobFunc, updateJobFunc } from './content-service-fun'
import { JobReq, JobReqError } from './job-req'

import { Job } from '@/backend/repository/job-repository/job-entity'
import { JobRepository } from '@/backend/repository/job-repository/job-repository'
import { NextApiRequest } from 'next'
import { JobRes } from './job-res'

export class JobService extends CommonService<JobRepository> {
  constructor() {
    super(new JobRepository())
  }

  public async getListJobs(
    req: NextApiRequest
  ): Promise<CommonResponse<CommonListResult<JobRes> | string>> {
    return await getListJobFunc(
      req,
      this.repository,
      this.getPageAndSize,
      this.generatePipelineAggregate(req.query, new Job())
    )
  }

  public async addNewJob(req: NextApiRequest): Promise<CommonResponse<JobReqError | string>> {
    return await addNewJobFunc(req.body, this.repository, req.query)
  }

  public async updateJob(req: JobReq, id: string): Promise<CommonResponse<JobReqError | string>> {
    return await updateJobFunc(req, id, this.repository)
  }

  public async deleteJob(ids: string): Promise<CommonResponse<string>> {
    return await deleteJobFunc(ids, this.repository)
  }
}
