import React from 'react'

function PersonIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M37.333 49v-4.667A9.333 9.333 0 0028 35H11.666a9.333 9.333 0 00-9.333 9.333V49m37.333-23.333l4.667 4.666L53.666 21m-24.5-4.667a9.333 9.333 0 11-18.666 0 9.333 9.333 0 0118.666 0z"
        stroke="url(#paint0_linear_1639_25958)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1639_25958"
          x1={1.99966}
          y1={7}
          x2={53.9997}
          y2={49}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PersonIcon
