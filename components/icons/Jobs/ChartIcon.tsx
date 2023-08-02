import React from 'react'

function ChartIcon({ ...props }) {
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
        d="M22.333 8a1 1 0 011-1h17.334a1 1 0 011 1v25.667H58a1 1 0 011 1V56a1 1 0 01-1 1H6a1 1 0 01-1-1V24a1 1 0 011-1h16.333V8zm17.334 47V9H24.333v46h15.334zm2 0H57V35.667H41.667V55zM22.333 25v30H7V25h15.333z"
        fill="url(#paint0_linear_1720_35655)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1720_35655"
          x1={4.64934}
          y1={7}
          x2={64.5327}
          y2={49.7392}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default ChartIcon
