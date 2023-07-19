import React from 'react'
import Title from '../Title'
import Line from '../Line'

function VerticalLine({ className = 'border-[#48444B]' }: { className?: string }) {
  return <div className={`w-full h-10 border-r ${className}`} />
}

function RoadMapItem({
  timeline,
  event,
  isOutstanding,
}: {
  timeline: string
  event: string
  isOutstanding?: boolean
}) {
  return (
    <div>
      <p
        className={`${
          isOutstanding ? 'text-primary' : 'text-white'
        } text-[48px] md:text-[60px] font-bold`}
      >
        {timeline}
      </p>
      <p className="text-sm md:text-base">{event}</p>
    </div>
  )
}

function Roadmap() {
  return (
    <div className="bg-[#0F0F0F] px-4 pt-16 md:pt-28 pb-36 relative -mt-1">
      <img
        src="/images/roadmap-decor-1.png"
        alt="decor"
        className="absolute -top-[450px] -left-[500px]"
      />
      <img
        src="/images/roadmap-decor-2.png"
        alt="decor"
        className="absolute -top-[250px] -right-[350px]"
      />
      <div className="relative z-10 px-4 mx-auto max-w-maxContent">
        <Title>
          <span>Lịch sử </span>hình thành & phát triển
        </Title>
        <div className="overflow-auto mt-14 md:mt-32">
          <div className="grid -ml-8 grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div className="col-span-2">
              <RoadMapItem timeline="2012" event="Thành lập" />
            </div>
            <div />
            <div />
            <div className="col-span-2">
              <RoadMapItem timeline="2016" event="Top 3 Asian Mobile Ad Network" />
            </div>
            <div />
            <div />
            <div className="col-span-3">
              <RoadMapItem isOutstanding timeline="2019" event="Đạt $50M GMV cho CPO" />
            </div>
            <div />
            <div className="col-span-3">
              <RoadMapItem
                timeline="2023"
                event="20.000+ khách hàng, có văn phòng đại diện tại Việt Nam, Singapore, Indonesia, Thái Lan"
              />
            </div>
          </div>
          <div className="grid mt-6 md:mt-8 grid-cols-16 w-[933px] md:w-auto">
            <VerticalLine />
            <div />
            <div />
            <div />
            <VerticalLine />
            <div />
            <div />
            <div />
            <VerticalLine className="border-primary" />
            <div />
            <div />
            <div />
            <VerticalLine />
          </div>
          <Line className="w-[933px] md:w-auto" />
          <div className="grid grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div />
            <VerticalLine />
            <div />
            <div />
            <div />
            <VerticalLine />
            <div />
            <div />
            <div />
            <VerticalLine />
          </div>
          <div className="grid mt-6 md:mt-10 -ml-8 grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div />
            <div />
            <div className="col-span-2">
              <RoadMapItem timeline="2014" event="Top 10 Asian Mobile Affiliate Network" />
            </div>
            <div />
            <div />
            <div className="col-span-2">
              <RoadMapItem timeline="2017" event="Thiết lập giải pháp CPO" />
            </div>
            <div />
            <div />
            <div className="col-span-3">
              <RoadMapItem
                timeline="2020"
                event="Đến nay: có 20.000+ khách hàng, có văn phòng đại diện tại Việt Nam, Singapore, Indonesia, Thái Lan"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
