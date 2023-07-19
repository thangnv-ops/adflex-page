import React from 'react'

function StarIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
        d="M28 4.666l7.21 14.607 16.123 2.356-11.666 11.364 2.753 16.053L28 41.463l-14.42 7.583 2.753-16.053L4.667 21.629l16.123-2.356L28 4.666z"
        stroke="url(#paint0_linear_1639_26038)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1639_26038"
          x1={4.36346}
          y1={4.66602}
          x2={57.0396}
          y2={41.2701}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default StarIcon
