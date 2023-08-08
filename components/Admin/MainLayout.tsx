import { ReactNode, useEffect } from 'react'

import { TOKEN_COOKIE_KEY } from '@/lib'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { NavbarAdmin } from './NavbarAdmin'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies([TOKEN_COOKIE_KEY])

  const router = useRouter()

  useEffect(() => {
    if (router) {
      if (cookies.token) {
        if (router.pathname.split('/')[router.pathname.split('/').length - 1] === 'admin') {
          router.push('/admin/users')
        }
      } else {
        router.push('/admin')
      }
    }
  }, [cookies, router])

  return (
    <>
      <NavbarAdmin />
      <div className="p-10">{children}</div>
    </>
  )
}
