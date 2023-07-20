import React, { InputHTMLAttributes } from 'react'

type CustomInputProps = InputHTMLAttributes<HTMLInputElement>

function PrimaryInput({ className = '', ...attributes }: CustomInputProps) {
  return (
    <input
      className={`border border-[#D0D5DD] rounded-lg py-[10px] px-[14px] ${className}`}
      {...attributes}
    />
  )
}

export default PrimaryInput
