import React from 'react'

function LinkedInIcon(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect x={2} y={1} width={36} height={36} rx={8} fill="#000" fillOpacity={0.05} />
      <g filter="url(#filter0_d_1725_20800)">
        <g clipPath="url(#clip0_1725_20800)">
          <path
            d="M28.52 9H11.477C10.66 9 10 9.645 10 10.441v17.114c0 .797.66 1.445 1.477 1.445H28.52c.816 0 1.48-.648 1.48-1.441V10.44C30 9.645 29.336 9 28.52 9zM15.934 26.043h-2.97v-9.547h2.97v9.547zm-1.485-10.848a1.72 1.72 0 11-.006-3.439 1.72 1.72 0 01.006 3.44zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719h-2.961v-9.547h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238z"
            fill="#98A2B3"
          />
        </g>
        <rect x={2.5} y={1.5} width={35} height={35} rx={3.5} stroke="#000" strokeOpacity={0.2} />
      </g>
      <defs>
        <filter
          id="filter0_d_1725_20800"
          x={0}
          y={0}
          width={40}
          height={40}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={1} />
          <feGaussianBlur stdDeviation={1} />
          <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1725_20800" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1725_20800" result="shape" />
        </filter>
        <clipPath id="clip0_1725_20800">
          <path fill="#fff" transform="translate(10 9)" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default LinkedInIcon
