import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
import { useEffect, useMemo, useState } from 'react'

import axios from 'axios'
import { useRouter } from 'next/router'

export const useGetContent = ({
  componentName,
  defaultValue,
}: {
  componentName: string
  defaultValue: string[]
}) => {
  const [result, setResult] = useState<string[]>([...defaultValue])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const router = useRouter()

  const getContent = async () => {
    if (componentName.length > 0 && typeof window !== 'undefined') {
      try {
        const contents = await axios.get(
          `${window.location.protocol}//${window.location.host}${getEndpoint(
            contentEndpoints,
            'getList'
          )}?componentName=${componentName}&route=${router.pathname}`
        )
        setResult(contents.data.result.data[0].content)
      } catch (err) {
        // do smth
        setResult(defaultValue)
      }
    } else {
      setResult([...defaultValue])
    }
  }

  useEffect(() => {
    if (componentName.length > 0 && mounted) {
      getContent()
    }
  }, [mounted])

  const output = useMemo(() => {
    if (result.length < defaultValue.length) {
      return [...result, ...defaultValue.filter((item, index) => index >= result.length)]
    }
    return result
  }, [result])

  return output
}
