import { useEffect, useState } from 'react'

import { TOKEN_COOKIE_KEY } from '@/lib'
import { AxiosResponse } from 'axios'
import { CommonResponse } from 'common-abstract-fares-system'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'

export const useApiCall = <T, E>({
  callApi,
  handleError,
  handleSuccess,
}: {
  callApi: () => Promise<AxiosResponse<any, any>>
  handleError?: (status: number, message: string) => void
  handleSuccess?: (message: string, data: T) => void
  preventLoadingGlobal?: boolean
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<CommonResponse<T>>()
  const [error, setError] = useState<CommonResponse<E>>()
  const [letCall, setLetCall] = useState<boolean>(false)

  const router = useRouter()

  const [, , removeCookie] = useCookies([TOKEN_COOKIE_KEY])

  const getData = async () => {
    try {
      const response = await callApi()
      const { success } = response.data
      if (success) {
        setData(response.data)
        setError(undefined)
        if (handleSuccess) {
          handleSuccess(response.data.message, response.data.result)
        }
      } else {
        const { status } = response.data
        if (status === 400) {
          setData(undefined)
          setError(response.data)
        }
        if (handleError) {
          handleError(status, response.data.message)
        }
        if (status === 401) {
          removeCookie(TOKEN_COOKIE_KEY)
        }
        if (status === 403) {
          router.push('/403')
        }
      }
    } finally {
      setLoading(false)
      setLetCall(false)
    }
  }

  useEffect(() => {
    if (letCall) {
      setLoading(true)
      getData()
    }
  }, [letCall])

  const handleReset = () => {
    setLoading(false)
    setData(undefined)
    setError(undefined)
    setLetCall(false)
  }

  return {
    handleReset,
    setLetCall,
    loading,
    data,
    error,
  }
}
