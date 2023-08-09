import { CommonRepository } from 'common-abstract-fares-system'
import { Job, JobSchema } from './job-entity'

export class JobRepository extends CommonRepository<Job> {
  constructor() {
    super(JobSchema, 'jobs')
  }
}
