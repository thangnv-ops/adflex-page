import React, { ButtonHTMLAttributes } from 'react'

type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

function PrimaryBtn({ children, className, ...attributes }: CustomButtonProps) {
  return (
    <button
      style={{
        backgroundImage: 'url(/images/primary-btn-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
      {...attributes}
      className={`${className} py-[10px] text-white px-5 outline-none`}
      type="button"
    >
      {children}
    </button>
  )
}

export default PrimaryBtn
