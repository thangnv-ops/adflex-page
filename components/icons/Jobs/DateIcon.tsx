import React from 'react'

function DateIcon(props) {
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
        d="M35 16.667H5m30 4.167v-6.167c0-2.8 0-4.2-.545-5.27a5 5 0 00-2.185-2.185c-1.07-.545-2.47-.545-5.27-.545H13c-2.8 0-4.2 0-5.27.545a5 5 0 00-2.185 2.185C5 10.467 5 11.867 5 14.667v14c0 2.8 0 4.2.545 5.27a5 5 0 002.185 2.185c1.07.545 2.47.545 5.27.545h7m6.667-33.333v6.667M13.333 3.334v6.667m10.834 21.666l3.333 3.334 7.5-7.5"
        stroke="url(#paint0_linear_1721_36413)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1721_36413"
          x1={4.80519}
          y1={3.33398}
          x2={41.8987}
          y2={25.3956}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default DateIcon
