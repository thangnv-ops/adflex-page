import React from 'react'

function ArrowDropdownIcon({ color = '#fff', ...props }: { color?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1627_67604)">
        <path
          d="M12 13.173l4.95-4.95 1.414 1.414L12 16 5.636 9.637 7.05 8.223l4.95 4.95z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1627_67604">
          <path fill="#fff" d="M0 0H24V24H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default ArrowDropdownIcon
