import React, { ReactNode } from 'react'

function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className={`${className} title text-[28px] md:text-5xl`}
    >
      {children}
    </div>
  )
}

export default Title
