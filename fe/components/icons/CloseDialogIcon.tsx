import React from 'react'

function CloseDialogIcon({ ...props }) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width={40} height={40} rx={20} fill="#D9D9D9" />
      <g clipPath="url(#clip0_1635_69311)">
        <path
          d="M20 18.587l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95 1.414-1.414 4.95 4.95z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id="clip0_1635_69311">
          <path fill="#fff" transform="translate(8 8)" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CloseDialogIcon
