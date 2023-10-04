import axios from 'axios'
import { NextApiRequest } from 'next'
import { CommonResponse } from 'common-abstract-fares-system'

export const sendCV = async (req: NextApiRequest): Promise<CommonResponse<any | string>> => {
  try {
    const res = await axios.post(`http://adflex-sendmail.fares.vn/send_email`, req.body)

    const result: CommonResponse<any> = {
      status: 200,
      success: true,
      result: res.data,
      message: 'ok',
    }
    return result
  } catch (err: any) {
    return {
      status: 500,
      success: true,
      result: 'error',
      message: String(err.message),
    }
  }
}
