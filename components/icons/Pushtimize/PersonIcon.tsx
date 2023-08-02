import React from 'react'

function PersonIcon({ ...props }) {
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
        d="M32 26.666c5.891 0 10.667-4.775 10.667-10.666S37.89 5.333 32 5.333 21.333 10.109 21.333 16c0 5.89 4.776 10.666 10.667 10.666z"
        stroke="url(#paint0_linear_1675_40399)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56 58.667c0-13.255-10.745-24-24-24s-24 10.745-24 24"
        stroke="url(#paint1_linear_1675_40399)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 48L29.333 58.667 24 53.333"
        stroke="url(#paint2_linear_1675_40399)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1675_40399"
          x1={21.1948}
          y1={5.33301}
          x2={46.049}
          y2={21.7577}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1675_40399"
          x1={7.6883}
          y1={34.667}
          x2={36.9379}
          y2={73.3255}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1675_40399"
          x1={23.8961}
          y1={48}
          x2={37.4043}
          y2={61.3901}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DD1000" />
          <stop offset={0.836458} stopColor="#4A4A4A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default PersonIcon
