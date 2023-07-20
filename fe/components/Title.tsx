import React, { ReactNode } from 'react'

function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${className} title text-[28px] md:text-5xl`}>{children}</div>
}

export default Title
