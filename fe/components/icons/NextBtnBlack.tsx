import React from 'react'

function NextBtnBlack({ ...props }) {
  return (
    <svg
      width={56}
      height={56}
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_b_1676_40456)">
        <rect width={56} height={56} rx={28} fill="#000" fillOpacity={0.05} />
        <path
          d="M21 28h14m0 0l-7-7m7 7l-7 7"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x={0.5} y={0.5} width={55} height={55} rx={27.5} stroke="#000" strokeOpacity={0.2} />
      </g>
      <defs>
        <filter
          id="filter0_b_1676_40456"
          x={-8}
          y={-8}
          width={72}
          height={72}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={4} />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1676_40456" />
          <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_1676_40456" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default NextBtnBlack
