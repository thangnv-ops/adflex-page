import { CommonResponse, convertValue, validate } from 'common-abstract-fares-system'
import { JobReq, JobReqError, JobReqValidation } from '../job-req'

import { Job } from '@/backend/repository/job-repository/job-entity'
import { JobRepository } from '@/backend/repository/job-repository/job-repository'

export const addNewJobFunc = async (
  req: JobReq,
  repository: JobRepository,
  query: any
): Promise<CommonResponse<JobReqError | string>> => {
  const validateRes = await validate(req, JobReqValidation, query)
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const entity = convertValue<Job>(req, new Job())
  const { error } = await repository.insert([{ ...entity }])
  if (error) {
    return {
      status: 500,
      message: error || '',
      result: '',
      success: false,
    }
  }
  return {
    status: 200,
    message: 'ok',
    result: '',
    success: true,
  }
}
