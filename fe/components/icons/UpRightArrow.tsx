import React from 'react'

function UpRightArrow({ color = '#DD1000', ...props }: { color?: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1635_69299)">
        <path
          d="M13.337 7.845l-7.173 7.173-1.178-1.179 7.172-7.172H5.837V5h9.166v9.167h-1.666V7.845z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1635_69299">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default UpRightArrow
