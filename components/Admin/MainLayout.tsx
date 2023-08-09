import { ReactNode, useEffect } from 'react'

import { TOKEN_COOKIE_KEY } from '@/lib'
import { ShareStoreSelector } from '@/redux/share-store/selector'
import { useRouter } from 'next/router'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import { BackDrop } from './BackDrop'
import { NavbarAdmin } from './NavbarAdmin'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const [cookies] = useCookies([TOKEN_COOKIE_KEY])

  const router = useRouter()

  const { loading } = useSelector(ShareStoreSelector)

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
      {loading > 0 && <BackDrop />}
      <NavbarAdmin />
      <div className="p-10">{children}</div>
    </>
  )
}
