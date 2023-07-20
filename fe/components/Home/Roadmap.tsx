import React from 'react'
import Title from '../Title'
import Line from '../Line'

function VerticalLine({ className = 'border-[#48444B]', ...props }: { className?: string }) {
  return <div {...props} className={`w-full h-10 border-r ${className}`} />
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
        <div className="overflow-x-auto overflow-y-hidden mt-14 md:mt-32">
          <div className="grid -ml-8 grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="500"
              className="col-span-2"
            >
              <RoadMapItem timeline="2013" event="Thành lập AdFlex" />
            </div>
            <div />
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="700"
              className="col-span-2"
            >
              <RoadMapItem timeline="2016" event="Phát triển ra thị trường Indonesia & Thái Lan" />
            </div>
            <div />
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="900"
              className="col-span-3"
            >
              <RoadMapItem timeline="2020" event="Đánh dấu cột mốc phục vụ 20,000+ khách hàng" />
            </div>
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1100"
              className="col-span-3"
            >
              <RoadMapItem
                isOutstanding
                timeline="2023"
                event="Trở thành Cloud & Service Partner của AWS, Google Cloud, Azure, Alibaba, HuaWei, TenCent"
              />
            </div>
          </div>
          <div className="grid mt-6 md:mt-8 grid-cols-16 w-[933px] md:w-auto">
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="500" />
            <div />
            <div />
            <div />
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="700" />
            <div />
            <div />
            <div />
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="900" />
            <div />
            <div />
            <div />
            <VerticalLine
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1100"
              className="border-primary"
            />
          </div>

          <div className="w-[933px] md:w-auto">
            <Line
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="900"
              className="w-[933px] md:w-auto"
            />
          </div>
          <div className="grid grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div />
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="700" />
            <div />
            <div />
            <div />
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="900" />
            <div />
            <div />
            <div />
            <VerticalLine data-aos="fade-up" data-aos-duration="700" data-aos-delay="1100" />
          </div>
          <div className="grid mt-6 md:mt-10 -ml-8 grid-cols-16 w-[933px] md:w-auto">
            <div />
            <div />
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="700"
              className="col-span-2"
            >
              <RoadMapItem timeline="2014" event="Top 10 Asian Mobile Affiliate Network" />
            </div>
            <div />
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="900"
              className="col-span-2"
            >
              <RoadMapItem timeline="2019" event=" Đạt $50M GMV. Ra mắt nền tảng Pushtimize" />
            </div>
            <div />
            <div />
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1100"
              className="col-span-3"
            >
              <RoadMapItem timeline="2022" event="Trở thành Strategic Partner của AppsFlyer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
