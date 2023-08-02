import React from 'react'

function ShieldIcon({ ...props }) {
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
        d="M8 11.008L32.011 4 56 11.008v14.37a35.088 35.088 0 01-23.996 33.29A35.094 35.094 0 018 25.371V11.008z"
        stroke="url(#paint0_linear_1682_33667)"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <path
        d="M31.933 19.933v21.333"
        stroke="url(#paint1_linear_1682_33667)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.266 30.6H42.6z"
        fill="url(#paint2_linear_1682_33667)"
      />
      <path
        d="M21.266 30.6H42.6"
        stroke="url(#paint3_linear_1682_33667)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1682_33667"
          x1={7.6883}
          y1={4}
          x2={67.7951}
          y2={38.8765}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1682_33667"
          x1={31.8638}
          y1={19.8634}
          x2={36.0786}
          y2={40.5028}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1682_33667"
          x1={32.0024}
          y1={41.3359}
          x2={27.7876}
          y2={20.6964}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1682_33667"
          x1={32.0024}
          y1={41.3359}
          x2={27.7876}
          y2={20.6964}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ShieldIcon
