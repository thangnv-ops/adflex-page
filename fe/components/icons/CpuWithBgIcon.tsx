import React from 'react'

function CpuWithBgIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="cpu"
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
        fill="url(#paint0_linear_1639_26051)"
      />
      <path
        d="M27 13.666v5m10-5v5M27 45.333v5m10-5v5m8.333-23.334h5m-5 8.334h5m-36.666-8.334h5m-5 8.334h5M22 18.666h20a3.333 3.333 0 013.333 3.333v20A3.333 3.333 0 0142 45.333H22a3.333 3.333 0 01-3.334-3.334V22A3.333 3.333 0 0122 18.666zm5 8.333h10v10H27V27z"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x={0.5} y={0.5} width={63} height={63} rx={31.5} stroke="#D0D5DD" />
      <defs>
        <linearGradient
          id="paint0_linear_1639_26051"
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

export default CpuWithBgIcon
