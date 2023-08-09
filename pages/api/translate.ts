import { NextApiRequest, NextApiResponse } from 'next'

import logger from 'common-abstract-fares-system/lib/logger'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, language } = req.body
  try {
    const getTran = await Promise.all(
      text.map(async (item: string) => {
        const encodedParams = new URLSearchParams()
        encodedParams.set('lang', language)
        encodedParams.set('text', item)

        const url =
          `https://translate.googleapis.com/translate_a/single?client=gtx&sl=` +
          `vi` +
          `&tl=${language}&dt=t&q=${encodeURI(item)}`

        try {
          const response = await fetch(url)
          const tranRes = await response.text()
          return JSON.parse(tranRes)[0][0][0]
        } catch (err) {
          logger.error([err as any])
          // do smth
          return item
        }
      })
    )
    const response = getTran
    res.status(200).send(response)
  } catch (err) {
    logger.error([err as any])
    res.status(400).send(err)
  }
}
