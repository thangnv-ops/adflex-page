import React from 'react'

function UploadIcon(props) {
  return (
    <svg
      width={46}
      height={46}
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={3} y={3} width={40} height={40} rx={20} fill="#F2F4F7" />
      <g clipPath="url(#clip0_1726_21029)">
        <path
          d="M26.333 26.333L22.999 23m0 0l-3.333 3.333M22.999 23v7.5m6.992-2.175a4.167 4.167 0 00-1.992-7.825h-1.05a6.666 6.666 0 10-11.45 6.083"
          stroke="#475467"
          strokeWidth={1.66667}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <rect x={3} y={3} width={40} height={40} rx={20} stroke="#F9FAFB" strokeWidth={6} />
      <defs>
        <clipPath id="clip0_1726_21029">
          <path fill="#fff" transform="translate(13 13)" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UploadIcon
