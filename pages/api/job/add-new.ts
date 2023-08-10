import { NextApiRequest, NextApiResponse } from 'next'

import { JobService } from '@/backend/service/job-service/job-service'
import { UserService } from '@/backend/service/user-service/user-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const userService = new UserService()
  const authRes = await userService.verifyInternalUserToken(req.cookies.token)
  if (authRes.success) {
    const service = new JobService()
    const result = await wrapperEndpoint(req, 'POST', service.addNewJob(req))
    res.status(200).json(result)
  } else {
    res.status(200).json(authRes)
  }
}
