import React from 'react'

function LikeIcon({ ...props }) {
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
        d="M11.667 36.667V18.334m-8.334 3.333v11.667a3.333 3.333 0 003.334 3.333h22.377a5 5 0 004.942-4.24l1.795-11.666A5 5 0 0030.839 15H25c-.92 0-1.667-.746-1.667-1.667v-5.89a4.11 4.11 0 00-4.11-4.11 1.37 1.37 0 00-1.251.814l-5.865 13.196c-.268.602-.865.99-1.523.99H6.667a3.333 3.333 0 00-3.334 3.333z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LikeIcon
