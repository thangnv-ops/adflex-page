import { useEffect, useState } from 'react'

import { LANGUAGE_COOKIE_KEY } from '@/lib'
import axios from 'axios'
import { useCookies } from 'react-cookie'

export default function useTranslation(text: string[]) {
  const [cookies] = useCookies([LANGUAGE_COOKIE_KEY])
  const [result, setResult] = useState(text)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const getTranslatedText = async () => {
    if (
      text.length > 0 &&
      typeof window !== 'undefined' &&
      cookies.language &&
      cookies.language !== 'vi'
    ) {
      const q = text.map((item) => {
        return { Text: item }
      })
      try {
        const translate = await axios.post(
          `${window.location.protocol}//${window.location.host}/api/translate`,
          {
            q,
            language: cookies.language || 'vi',
          }
        )
        setResult(
          translate.data.map((item: any) => {
            return item.translations[0].text
          })
        )
      } catch (err) {
        // do smth
      }
    } else {
      setResult(text)
    }
  }

  useEffect(() => {
    if (text.length > 0 && mounted) {
      getTranslatedText()
    }
  }, [cookies.language, mounted])

  return result
}
