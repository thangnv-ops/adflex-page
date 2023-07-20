import React from 'react'

function QualityIcon({ ...props }) {
  return (
    <svg
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.804 27.756c.49-.991 1.903-.991 2.392 0l3.98 8.065c.194.393.57.666 1.004.729l8.9 1.293c1.093.16 1.53 1.503.738 2.274l-6.44 6.278a1.333 1.333 0 00-.383 1.18l1.52 8.864c.187 1.09-.956 1.92-1.934 1.405l-7.96-4.184a1.333 1.333 0 00-1.241 0l-7.96 4.184c-.979.515-2.122-.316-1.935-1.405l1.52-8.864a1.333 1.333 0 00-.383-1.18l-6.44-6.278c-.792-.77-.355-2.115.739-2.274l8.9-1.293c.434-.063.809-.336 1.003-.73l3.98-8.064z"
        stroke="url(#paint0_linear_1675_40388)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 5.333H16v13.333l16 6.667 16-6.667V5.333z"
        stroke="url(#paint1_linear_1675_40388)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1675_40388"
          x1={15.5668}
          y1={27.0127}
          x2={52.2921}
          y2={52.4235}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1675_40388"
          x1={15.7922}
          y1={5.33301}
          x2={41.0817}
          y2={32.0726}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default QualityIcon
