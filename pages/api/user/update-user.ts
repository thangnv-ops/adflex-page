import { NextApiRequest, NextApiResponse } from 'next'

import { UserService } from '@/backend/service/user-service/user-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new UserService()
  const result = await wrapperEndpoint(
    req,
    'PUT',
    service.updateUser(req.body, (req.query.id as string) || '')
  )
  res.status(200).json(result)
}
