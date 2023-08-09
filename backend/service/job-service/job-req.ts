import { IS_REQUIRED, ObjectValidator } from 'common-abstract-fares-system'

export class JobReq {
  title: string = ''

  quantity: number = 0

  content: string = ''

  deadline: string = ''

  salary: string = ''
}

export const JobReqValidation: ObjectValidator<JobReq> = {
  title: IS_REQUIRED,
  quantity: IS_REQUIRED,
  content: IS_REQUIRED,
  deadline: IS_REQUIRED,
  salary: IS_REQUIRED,
}

export type JobReqError = Record<keyof JobReq, string>
