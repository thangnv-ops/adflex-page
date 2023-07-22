import React from 'react'

function CopyIcon({ ...props }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1725_20808)">
        <path
          d="M4.168 12.5h-.833a1.666 1.666 0 01-1.667-1.667v-7.5a1.667 1.667 0 011.667-1.667h7.5A1.666 1.666 0 0112.5 3.333v.833M9.168 7.499h7.5c.92 0 1.667.747 1.667 1.667v7.5c0 .92-.747 1.667-1.667 1.667h-7.5c-.92 0-1.667-.746-1.667-1.667v-7.5c0-.92.746-1.667 1.667-1.667z"
          stroke="#000"
          strokeWidth={1.67}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1725_20808">
          <path fill="#fff" d="M0 0H20V20H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CopyIcon
