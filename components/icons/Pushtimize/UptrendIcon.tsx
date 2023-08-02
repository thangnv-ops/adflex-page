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
        d="M58.667 18.667L37.684 39.65c-1.056 1.056-1.584 1.584-2.193 1.782a2.667 2.667 0 01-1.648 0c-.61-.198-1.137-.726-2.193-1.782l-7.3-7.3c-1.056-1.055-1.584-1.583-2.193-1.781a2.667 2.667 0 00-1.648 0c-.609.198-1.137.726-2.193 1.782L5.333 45.334m53.334-26.667H40m18.667 0v18.667"
        stroke="url(#paint0_linear_1675_40391)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1675_40391"
          x1={4.98698}
          y1={18.667}
          x2={37.4865}
          y2={61.6209}
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
