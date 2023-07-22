import React from 'react'

function TwitterIcon(props) {
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
      <g filter="url(#filter0_d_1725_20798)">
        <path
          d="M16.292 27.126c7.545 0 11.673-6.253 11.673-11.674 0-.176-.004-.355-.012-.531A8.332 8.332 0 0030 12.797a8.09 8.09 0 01-2.355.644 4.125 4.125 0 001.804-2.269 8.249 8.249 0 01-2.605.996 4.108 4.108 0 00-6.994 3.741 11.653 11.653 0 01-8.456-4.284 4.107 4.107 0 001.27 5.476 4.109 4.109 0 01-1.86-.512v.05a4.101 4.101 0 003.293 4.024 4.078 4.078 0 01-1.851.07 4.112 4.112 0 003.831 2.852A8.23 8.23 0 0110 25.283a11.64 11.64 0 006.292 1.843z"
          fill="#98A2B3"
        />
        <rect x={2.5} y={1.5} width={35} height={35} rx={3.5} stroke="#000" strokeOpacity={0.2} />
      </g>
      <defs>
        <filter
          id="filter0_d_1725_20798"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1725_20798" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1725_20798" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default TwitterIcon
