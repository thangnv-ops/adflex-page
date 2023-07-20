import React from 'react'

function Line({ className = '' }: { className?: string }) {
  return <div className={`${className} w-full h-[1px] bg-[#48444B]`} />
}

export default Line
