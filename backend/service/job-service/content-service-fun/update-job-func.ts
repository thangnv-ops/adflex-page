import { CommonResponse, validate } from 'common-abstract-fares-system'
import { JobReq, JobReqError, JobReqValidation } from '../job-req'

import { JobRepository } from '@/backend/repository/job-repository/job-repository'
import mongoose from 'mongoose'

export const updateJobFunc = async (
  req: JobReq,
  id: string,
  repository: JobRepository
): Promise<CommonResponse<JobReqError | string>> => {
  const validateRes = await validate(req, JobReqValidation, { id })
  if (validateRes.isError) {
    return {
      success: false,
      result: validateRes.error,
      message: 'invalidRequest',
      status: 400,
    }
  }
  const res = {
    success: false,
    message: '',
    result: {
      title: '',
      quantity: '',
      content: '',
      deadline: '',
      salary: '',
    },
    status: 400,
  }
  if (!id || !mongoose.isValidObjectId(id)) {
    return {
      ...res,
      message: 'invalid job id',
    }
  }
  const findJob = await repository.findOne('_id', new mongoose.Types.ObjectId(id))
  if (!findJob.result) {
    return {
      success: false,
      message: 'not found job',
      result: '',
      status: 404,
    }
  }
  const { error } = await repository.update([{ ...findJob.result, ...req }])
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
