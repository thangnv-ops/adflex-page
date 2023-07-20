import React, { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function TertiaryBtn({ children, className, ...attributes }: CustomButtonProps) {
  return (
    <button
      type="button"
      className={`${className} bg-white bg-opacity-20 border border-white border-opacity-40 rounded-lg`}
      {...attributes}
    >
      {children}
    </button>
  )
}

export default TertiaryBtn
