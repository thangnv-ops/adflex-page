import React from 'react'

function LabelFoot({
  color = '',
  className = '',
  ...props
}: {
  color?: string
  className?: string
}) {
  return (
    <svg
      className={className}
      width={23}
      height={23}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1645_26333)">
        <g clipPath="url(#clip1_1645_26333)">
          <path
            d="M45 23.06v.033c-12.15 0-16.296-.032-22.098-.032s-10.254.016-22.902.016c12.648 0 22.902-10.332 22.902-23.077 0 12.474 9.82 22.636 22.098 23.06z"
            fill={color}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1645_26333">
          <path fill="#fff" d="M0 0H23V23H0z" />
        </clipPath>
        <clipPath id="clip1_1645_26333">
          <path fill="#fff" d="M0 0H45V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LabelFoot
