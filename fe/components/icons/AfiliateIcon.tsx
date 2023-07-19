import React from 'react'

function AfiliateIcon({ ...props }) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.667 39.112a6.222 6.222 0 006.222 6.222h5.778a6.667 6.667 0 000-13.333h-5.334a6.667 6.667 0 010-13.334h5.778a6.222 6.222 0 016.222 6.223M32 14.667v4m0 26.667v4m26.667-17.333c0 14.727-11.94 26.666-26.667 26.666-14.728 0-26.667-11.939-26.667-26.666C5.333 17.273 17.273 5.334 32 5.334c14.728 0 26.667 11.94 26.667 26.667z"
        stroke="url(#paint0_linear_1665_28054)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1665_28054"
          x1={4.98698}
          y1={5.33399}
          x2={67.1226}
          y2={46.3956}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default AfiliateIcon
