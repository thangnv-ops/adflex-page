import React from 'react'

function UptrendIcon({ ...props }) {
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
        d="M54.666 36V20h-16"
        stroke="url(#paint0_linear_1720_35671)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 49.333l13.785-16.666 13.128 8L54.667 20"
        stroke="url(#paint1_linear_1720_35671)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1720_35671"
          x1={38.5621}
          y1={20}
          x2={57.2027}
          y2={32.3183}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1720_35671"
          x1={7.69696}
          y1={20}
          x2={44.7994}
          y2={59.0071}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default UptrendIcon
