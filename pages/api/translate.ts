import { NextApiRequest, NextApiResponse } from 'next'

import axios from 'axios'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q, language } = req.body
  const options = {
    method: 'POST',
    url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
    params: {
      'to[0]': language,
      'api-version': '3.0',
      profanityAction: 'NoAction',
      textType: 'plain',
    },
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': process.env.RAPID_KEY,
      'X-RapidAPI-Host': process.env.RAPID_HOST,
    },
    data: q,
  }

  try {
    const getTranslate = await axios.request(options)
    const response = getTranslate.data
    res.status(200).send(response)
  } catch (err) {
    res.status(500).send(err)
  }
}
