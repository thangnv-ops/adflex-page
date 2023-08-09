import { NextApiRequest, NextApiResponse } from 'next'

import { JobService } from '@/backend/service/job-service/job-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new JobService()
  const result = await wrapperEndpoint(req, 'DELETE', service.deleteJob(req.query.ids as string))
  res.status(200).json(result)
}
