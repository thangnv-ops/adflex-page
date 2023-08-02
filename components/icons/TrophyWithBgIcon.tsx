import React from 'react'

function TrophyWithBgIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="trophy"
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
        fill="url(#paint0_linear_1639_26060)"
      />
      <path
        d="M32 37c5.523 0 10-4.608 10-10.294V15.334H22v11.372c0 5.686 4.477 10.295 10 10.295z"
        stroke="#fff"
        strokeLinejoin="round"
      />
      <path
        clipRule="evenodd"
        d="M22 29.501v-8.333h-6.666c0 5.556 3.333 8.333 6.666 8.333zM42 29.501v-8.333h6.667c0 5.556-3.334 8.333-6.667 8.333z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 38.668v3.333" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.5 47l3.075-5h8.627l3.298 5h-15z" stroke="#fff" strokeLinejoin="round" />
      <rect x={0.5} y={0.5} width={63} height={63} rx={31.5} stroke="#D0D5DD" />
      <defs>
        <linearGradient
          id="paint0_linear_1639_26060"
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

export default TrophyWithBgIcon
