import React from 'react'

function RenewIcon({ ...props }) {
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
        d="M36.667 11.666L23.552 24.78c-.66.66-.99.99-1.37 1.114a1.666 1.666 0 01-1.03 0c-.38-.124-.71-.454-1.37-1.114l-4.563-4.562c-.66-.66-.99-.99-1.37-1.113a1.666 1.666 0 00-1.03 0c-.381.123-.711.453-1.371 1.113l-8.115 8.115m33.334-16.667H25m11.667 0v11.667"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default RenewIcon
