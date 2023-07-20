import React from 'react'

function Step({ isActive = false }: { isActive?: boolean }) {
  return (
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full ${
        isActive ? 'bg-[#FF9C9C]' : 'bg-transparent'
      }`}
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full ${
          isActive ? 'bg-[#F8CFC]' : 'bg-[#EAECF0]'
        }`}
      >
        <div
          className={`w-3 h-3 flex items-center justify-center rounded-full ${
            isActive ? 'bg-[#DD1000]' : 'bg-[#98A2B3]'
          }`}
        />
      </div>
    </div>
  )
}

export default Step
