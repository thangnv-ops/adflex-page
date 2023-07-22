import React from 'react'

function FacebookIcon(props) {
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
      <g filter="url(#filter0_d_1725_20799)">
        <g clipPath="url(#clip0_1725_20799)">
          <path
            d="M30 19c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V19h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V19h2.773l-.443 2.89h-2.33v6.988C26.343 28.128 30 23.991 30 19z"
            fill="#98A2B3"
          />
        </g>
        <rect x={2.5} y={1.5} width={35} height={35} rx={3.5} stroke="#000" strokeOpacity={0.2} />
      </g>
      <defs>
        <filter
          id="filter0_d_1725_20799"
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
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1725_20799" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1725_20799" result="shape" />
        </filter>
        <clipPath id="clip0_1725_20799">
          <path fill="#fff" transform="translate(10 9)" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default FacebookIcon
