import { NextApiRequest, NextApiResponse } from 'next'

import { UserService } from '@/backend/service/user-service/user-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new UserService()
  const authRes = await service.verifyInternalUserToken(req.cookies.token)
  if (authRes.success) {
    const result = await wrapperEndpoint(req, 'GET', service.getListUsers(req))
    res.status(200).json(result)
  } else {
    res.status(200).json(authRes)
  }
}
