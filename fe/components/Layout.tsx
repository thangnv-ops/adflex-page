import React from 'react'
import MainNav from './MainNav'
import Footer from './Footer'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans text-white">
      <MainNav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
