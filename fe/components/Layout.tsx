import React, { useEffect } from 'react'
import MainNav from './MainNav'
import Footer from './Footer'
import AOS from 'aos'

function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className="font-sans text-white">
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
