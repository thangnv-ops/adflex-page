import React from 'react'

function PersonIcon({ ...props }) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.999 25.833h-7.5c-2.326 0-3.49 0-4.436.287a6.667 6.667 0 00-4.444 4.445c-.287.946-.287 2.11-.287 4.435m23.333-5L30 33.333l6.666-6.666M24.165 12.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
        stroke="url(#paint0_linear_1721_36409)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1721_36409"
          x1={3.11557}
          y1={5}
          x2={39.3657}
          y2={31.6172}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PersonIcon
