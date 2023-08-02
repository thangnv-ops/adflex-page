import React from 'react'

function ArrowDownIcon({
  color = '#fff',
  className = '',
  ...props
}: {
  color?: string
  className: string
}) {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1651_26350)">
        <path
          d="M13 16.172l5.364-5.364 1.414 1.414L12 20l-7.778-7.778 1.414-1.414L11 16.172V4h2v12.172z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1651_26350">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowDownIcon
