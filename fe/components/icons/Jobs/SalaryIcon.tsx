import React from 'react'

function SalaryIcon(props) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.548 13.92a5.833 5.833 0 111.568-7.84M10 33.48h4.35c.567 0 1.131.067 1.681.202l4.597 1.117a7.126 7.126 0 003.044.07l5.083-.988a7.007 7.007 0 003.545-1.846l3.596-3.498a2.505 2.505 0 000-3.615c-.924-.899-2.388-1-3.434-.238l-4.191 3.058c-.6.439-1.33.675-2.082.675h-4.047 2.576c1.452 0 2.628-1.144 2.628-2.557v-.51c0-1.174-.82-2.196-1.99-2.48l-3.975-.966a8.375 8.375 0 00-1.976-.237c-1.608 0-4.519 1.332-4.519 1.332L10 25.042m23.333-14.208a5.833 5.833 0 11-11.667 0 5.833 5.833 0 0111.667 0zm-30 13.5v9.667c0 .933 0 1.4.182 1.756.16.314.414.569.728.729.357.181.823.181 1.757.181h1.333c.933 0 1.4 0 1.757-.181.313-.16.568-.415.728-.729.182-.356.182-.823.182-1.756v-9.667c0-.933 0-1.4-.182-1.757a1.667 1.667 0 00-.728-.728c-.357-.182-.824-.182-1.757-.182H5.999c-.934 0-1.4 0-1.757.182-.314.16-.569.415-.728.728-.182.357-.182.824-.182 1.757z"
        stroke="url(#paint0_linear_1721_36411)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1721_36411"
          x1={3.11557}
          y1={3.33398}
          x2={41.9503}
          y2={28.9975}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default SalaryIcon
