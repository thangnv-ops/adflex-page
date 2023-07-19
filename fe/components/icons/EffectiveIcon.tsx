import React from 'react'

function EffectiveIcon({ ...props }) {
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
        d="M18.333 5H13c-2.8 0-4.2 0-5.27.546A5 5 0 005.545 7.73C5 8.8 5 10.2 5 13v14c0 2.8 0 4.2.545 5.27a5 5 0 002.185 2.185C8.8 35 10.2 35 13 35h14c2.8 0 4.2 0 5.27-.545a5 5 0 002.185-2.185C35 31.2 35 29.8 35 27v-5.334m-15-8.333h6.667v6.667m-.834-14.167v-2.5M32.4 7.602l1.768-1.768m.017 8.333h2.5M5 22.246c1.087.168 2.2.255 3.333.255 7.31 0 13.776-3.621 17.7-9.167"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default EffectiveIcon
