import React from 'react'

function CPUIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.394 2.334a1 1 0 10-2 0v6h-4.727a3.333 3.333 0 00-3.333 3.333v4.728h-6a1 1 0 100 2h6V27h-6a1 1 0 100 2h6v8.606h-6a1 1 0 100 2h6v4.727a3.333 3.333 0 003.333 3.333h4.727v6a1 1 0 002 0v-6H27v6a1 1 0 102 0v-6h8.606v6a1 1 0 102 0v-6h4.727a3.333 3.333 0 003.334-3.333v-4.727h6a1 1 0 000-2h-6V29h6a1 1 0 100-2h-6v-8.606h6a1 1 0 100-2h-6v-4.728a3.333 3.333 0 00-3.334-3.333h-4.727v-6a1 1 0 10-2 0v6H29v-6a1 1 0 10-2 0v6h-8.606v-6zm-8.06 36.273v5.727c0 .736.596 1.333 1.333 1.333h32.666c.737 0 1.334-.597 1.334-1.333V11.667c0-.736-.597-1.333-1.334-1.333H11.668c-.737 0-1.333.597-1.333 1.333V38.607zM21 20a1 1 0 00-1 1v14a1 1 0 001 1h14a1 1 0 001-1V21a1 1 0 00-1-1H21zm1 14V22h12v12H22z"
        fill="url(#paint0_linear_1639_25929)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1639_25929"
          x1={0.987164}
          y1={1.33399}
          x2={63.1228}
          y2={42.3956}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default CPUIcon
