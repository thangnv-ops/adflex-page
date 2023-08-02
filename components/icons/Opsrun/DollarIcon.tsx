import React from 'react'

function DollarIcon({ ...props }) {
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
        d="M32.333 2a1 1 0 011 1v4.333H47l.001 1v1H33.332v22h4.334c7.18 0 13 5.82 13 13s-5.82 13-13 13h-4.334v4.334a1 1 0 01-2 0v-4.334H17.667v-1-1H31.333v-22H27c-7.18 0-13-5.82-13-13s5.82-13 13-13h4.333V3a1 1 0 011-1zM27 31.333h4.333v-22H27c-6.075 0-11 4.925-11 11 0 6.076 4.925 11 11 11zm6.333 2v22H37.667c6.075 0 11-4.925 11-11s-4.925-11-11-11h-4.334zm-15.666 23v1a1 1 0 110-2v1zM47 8.333v-1a1 1 0 110 2v-1z"
        fill="url(#paint0_linear_1682_33655)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1682_33655"
          x1={13.7619}
          y1={2}
          x2={66.6918}
          y2={23.1406}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default DollarIcon
