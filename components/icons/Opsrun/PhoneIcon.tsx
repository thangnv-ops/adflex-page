import React from 'react'

function PhoneIcon({ ...props }) {
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
        d="M55.113 27.209c.311-2.088.21-4.224-.306-6.279a15.926 15.926 0 00-4.204-7.407 15.926 15.926 0 00-7.407-4.204 16.083 16.083 0 00-6.279-.306"
        stroke="url(#paint0_linear_1675_40393)"
        strokeWidth={1.84615}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.772 26.22a7.374 7.374 0 00-2.082-6.317 7.374 7.374 0 00-6.316-2.082"
        stroke="url(#paint1_linear_1675_40393)"
        strokeWidth={1.84615}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.385 12.67c.895 0 1.718.485 2.153 1.267l3.01 5.423c.395.71.413 1.57.05 2.296l-2.9 5.802s.84 4.321 4.358 7.84c3.518 3.517 7.825 4.343 7.825 4.343l5.8-2.9a2.461 2.461 0 012.298.05l5.439 3.025a2.461 2.461 0 011.265 2.15v6.245c0 3.18-2.953 5.477-5.966 4.46-6.188-2.088-15.794-6.063-21.883-12.152-6.088-6.088-10.064-15.694-12.152-21.882-1.016-3.013 1.28-5.967 4.46-5.967h6.243z"
        stroke="url(#paint2_linear_1675_40393)"
        strokeWidth={1.84615}
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1675_40393"
          x1={36.7981}
          y1={8.83691}
          x2={58.2018}
          y2={22.9814}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1675_40393"
          x1={37.3188}
          y1={17.7402}
          x2={47.1975}
          y2={24.2683}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1675_40393"
          x1={10.1773}
          y1={12.6699}
          x2={57.0642}
          y2={43.6546}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PhoneIcon
