import React from 'react'

function StarWithBgIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="star"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={0.5}
        y={0.5}
        width={63}
        height={63}
        rx={31.5}
        fill="url(#paint0_linear_1639_26054)"
      />
      <path
        d="M32 15.334l5.15 10.433 11.517 1.684-8.334 8.116L42.3 47.034 32 41.617l-10.3 5.417 1.967-11.467-8.334-8.116 11.517-1.684L32 15.334z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={0.5} y={0.5} width={63} height={63} rx={31.5} stroke="#D0D5DD" />
      <defs>
        <linearGradient
          id="paint0_linear_1639_26054"
          x1={-0.415598}
          y1={8.53646e-7}
          x2={74.1471}
          y2={49.274}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default StarWithBgIcon
