import React, { ReactNode } from 'react'
import LabelFoot from '../icons/LabelFoot'

function Label({
  className = '',
  startColor = '',
  stopColor = '',
  children,
}: {
  className?: string
  startColor?: string
  stopColor?: string
  children: ReactNode
}) {
  return (
    <div className="flex items-end -ml-7">
      <LabelFoot color={startColor} />
      <div
        className={`${className} py-3 px-5 h-14 rounded-t-3xl flex items-center justify-center text-xl uppercase font-semibold`}
      >
        {children}
      </div>
      <LabelFoot color={stopColor} className="-scale-x-100" />
    </div>
  )
}

export default Label
