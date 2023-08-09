import { NextApiRequest, NextApiResponse } from 'next'

import { BlogService } from '@/backend/service/blog-service/blog-service'
import { wrapperEndpoint } from 'common-abstract-fares-system'

/*
    @ericchen:

    put your explanation here
*/

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const service = new BlogService()
  const result = await wrapperEndpoint(req, 'GET', service.getListBlogs(req))
  res.status(200).json(result)
}
