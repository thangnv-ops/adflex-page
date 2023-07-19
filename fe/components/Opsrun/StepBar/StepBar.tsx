import Line from '@/components/Line'
import React from 'react'
import DoneStep from './DoneStep'
import Step from './Step'
import VerticalLine from '@/components/VerticalLine'

function StepBar() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="grid grid-cols-4 max-w-[808px] mx-auto">
          <Line className="bg-[#DD1000] h-[2px]" />
          <Line className="h-[2px]" />
          <Line className="h-[2px]" />
          <Line className="h-[2px]" />
        </div>
        <div className="grid grid-cols-5 items-center max-w-[1005px] mx-auto -mt-[26px]">
          <div className="flex flex-col items-center ">
            <DoneStep />
          </div>
          <div className="flex flex-col items-center">
            <Step isActive />
          </div>
          <div className="flex flex-col items-center">
            <Step />
          </div>
          <div className="flex flex-col items-center">
            <Step />
          </div>
          <div className="flex flex-col items-center">
            <Step />
          </div>
        </div>
        <div className="grid grid-cols-5 items-center max-w-[1005px] mx-auto mt-4 text-black">
          <div className="flex flex-col items-center ">
            <p className="text-2xl">Phân tích</p>
          </div>
          <div className="flex flex-col items-center text-primary">
            <p className="text-2xl">Lên kế hoạch</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">Triển khai</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">Bàn giao</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[22px]">Hỗ trợ sau bàn giao</p>
          </div>
        </div>
      </div>
      <div className="flex max-w-[300px] mx-auto">
        <div className="flex flex-col">
          <VerticalLine className="h-16 w-[2px] bg-primary" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
          <VerticalLine className="h-16 w-[2px] bg-[#98A2B3]" />
        </div>
        <div className="flex flex-col -mt-[24px] -ml-5 text-black gap-9">
          <div className="flex items-center gap-3">
            <DoneStep />
            <p className="text-2xl">Phân tích</p>
          </div>
          <div className="flex items-center gap-3 -ml-1">
            <Step isActive />
            <p className="text-2xl text-primary">Lên kế hoạch</p>
          </div>
          <div className="flex items-center gap-3 -ml-1">
            <Step />
            <p className="text-2xl ">Triển khai</p>
          </div>
          <div className="flex items-center gap-3 -ml-1">
            <Step />
            <p className="text-2xl ">Bàn giao</p>
          </div>
          <div className="flex items-center gap-3 -ml-1">
            <Step />
            <p className="text-2xl ">Hỗ trợ sau bàn giao</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepBar
