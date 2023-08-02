import React from 'react'

function QualityIcon({ ...props }) {
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
        d="M7.5 36.667v-8.333m0-16.667V3.334M3.333 7.501h8.334m-8.334 25h8.334m10-27.5l-2.89 7.514c-.47 1.223-.706 1.833-1.071 2.348a5 5 0 01-1.177 1.177c-.514.365-1.126.6-2.348 1.07L6.667 20l7.514 2.89c1.223.471 1.834.706 2.348 1.071a5 5 0 011.177 1.178c.365.514.6 1.125 1.07 2.347L21.666 35l2.891-7.515c.47-1.222.705-1.833 1.07-2.347a5 5 0 011.178-1.178c.514-.365 1.125-.6 2.347-1.07L36.667 20l-7.515-2.89c-1.222-.47-1.833-.706-2.347-1.071a5 5 0 01-1.177-1.177c-.366-.514-.601-1.125-1.071-2.348l-2.89-7.514z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default QualityIcon
