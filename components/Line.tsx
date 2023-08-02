import React from 'react'

function Line({ className = '', ...props }: { className?: string }) {
  return <div {...props} className={`${className} w-full h-[1px] bg-[#48444B]`} />
}

export default Line
