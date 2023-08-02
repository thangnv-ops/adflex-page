import React from 'react'

function SearchIcon({ color = '#fff', ...props }: { color?: string }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z"
        stroke={color}
        strokeWidth={1.67}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SearchIcon
