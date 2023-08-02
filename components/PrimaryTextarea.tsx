import React, { TextareaHTMLAttributes } from 'react'

type CustomTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

function PrimaryTextarea({ className = '', ...props }: CustomTextareaProps) {
  return (
    <textarea
      className={`${className} w-full h-full rounded-lg py-[10px] px-[14px] border border-[#D0D5DD]`}
      {...props}
    />
  )
}

export default PrimaryTextarea
