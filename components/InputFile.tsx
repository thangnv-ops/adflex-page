import React from 'react'
import UploadIcon from './icons/UploadIcon'

function InputFile({ className = '', onChange }: { className?: string; onChange: (e) => void }) {
  return (
    <label className={`cursor-pointer ${className}`}>
      <div className="flex flex-col items-center px-6 py-4 text-center bg-white rounded-lg">
        <UploadIcon />
        <p className="text-[#3355A6] font-medium mt-3 text-sm">Click để upload CV</p>
        <p className="text-[#667085] text-xs mt-1">PDF, DOC, DOCX (tối đa 5MB)</p>
      </div>
      <input
        className="hidden"
        type="file"
        onChange={onChange}
        accept=".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      />
    </label>
  )
}

export default InputFile
