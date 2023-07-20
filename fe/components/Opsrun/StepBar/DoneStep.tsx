import React from 'react'

function DoneStep({ ...props }) {
  return (
    <svg
      width={41}
      height={40}
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1682_34282)">
        <rect x={0.799805} width={40} height={40} rx={20} fill="#F8CFCC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.294 12.317L17.36 23.833l-3.166-3.383c-.584-.55-1.5-.583-2.167-.117-.65.484-.833 1.334-.433 2.017l3.75 6.1c.366.567 1 .917 1.716.917.684 0 1.334-.35 1.7-.917.6-.783 12.05-14.433 12.05-14.433 1.5-1.534-.316-2.884-1.516-1.717v.017z"
          fill="#DD1000"
        />
      </g>
      <defs>
        <clipPath id="clip0_1682_34282">
          <rect x={0.799805} width={40} height={40} rx={20} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default DoneStep
