import React from 'react'

function SmsIcon({ ...props }) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 31.667C6 17.49 17.491 6 31.667 6c14.175 0 25.666 11.491 25.666 25.667 0 14.175-11.491 25.666-25.666 25.666H6V31.667zM4 58.333h1-1a1 1 0 001 1v-1 1H31.668c15.28 0 27.666-12.386 27.666-27.666C59.333 16.387 46.947 4 31.667 4 16.387 4 4 16.387 4 31.667V58.333zm40.374-32.626a1 1 0 00-1.414-1.414L26.333 40.919l-7.293-7.293a1 1 0 00-1.414 1.414l8 8a1 1 0 001.415 0l17.333-17.333z"
        fill="url(#paint0_linear_1666_13385)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1666_13385"
          x1={3.64068}
          y1={4}
          x2={68.1064}
          y2={46.6014}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SmsIcon
