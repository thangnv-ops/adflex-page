import React from 'react'

function TrophyIcon({ ...props }) {
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
        d="M14.667 7a1 1 0 011-1h32a1 1 0 011 1v8.333h9.666a1 1 0 011 1c0 9.262-5.59 14.25-11.517 14.333-2.23 6.957-8.601 12-16.15 12-7.547 0-13.918-5.043-16.149-12C9.59 30.583 4 25.595 4 16.333a1 1 0 011-1h9.667V7zm32 18.196V8h-30V25.196c0 8.572 6.742 15.47 15 15.47 8.257 0 15-6.898 15-15.47zm2-7.863v11.275c4.176-.495 8.292-4.101 8.642-11.275h-8.642zm-42.643 0h8.643v11.275c-4.177-.495-8.293-4.101-8.643-11.275zm25.643 26a1 1 0 011 1v4.334h5.723a1 1 0 01.835.45l5.276 8a1 1 0 01-.834 1.55h-24a1 1 0 01-.852-1.524l4.92-8a1 1 0 01.852-.476h6.08v-4.334a1 1 0 011-1zm0 7.334h-6.521l-3.69 6h20.353l-3.957-6h-6.185z"
        fill="url(#paint0_linear_1720_35661)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1720_35661"
          x1={3.64068}
          y1={6}
          x2={66.134}
          y2={49.3891}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default TrophyIcon
