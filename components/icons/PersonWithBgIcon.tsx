import React from 'react'

function PersonWithBgIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="person"
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
        fill="url(#paint0_linear_1639_26057)"
      />
      <path
        d="M38.666 47v-3.333A6.667 6.667 0 0032 37H20.333a6.667 6.667 0 00-6.666 6.667V47m26.666-16.667l3.334 3.334L50.332 27m-17.5-3.333a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={0.5} y={0.5} width={63} height={63} rx={31.5} stroke="#D0D5DD" />
      <defs>
        <linearGradient
          id="paint0_linear_1639_26057"
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

export default PersonWithBgIcon
