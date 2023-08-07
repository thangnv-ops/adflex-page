import { ReactNode } from 'react'
import { NavbarAdmin } from './NavbarAdmin'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavbarAdmin /> {children}
    </>
  )
}
