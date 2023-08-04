import useTranslation from '@/hooks/useTranslation'
import Line from '../Line'
import Title from '../Title'

function VerticalLine({ className = 'border-[#48444B]', ...props }: { className?: string }) {
  return <div {...props} className={`w-full h-10 border-r ${className}`} />
}

function RoadMapItem({
  timeline,
  event,
  isOutstanding,
  isAlignRight,
}: {
  timeline: string
  event: string
  isOutstanding?: boolean
  isAlignRight?: boolean
}) {
  const transRes = useTranslation([event])
  return (
    <div>
      <p
        className={`${isOutstanding ? 'text-primary' : 'text-white'} ${
          isAlignRight ? 'text-right' : 'text-left'
        } text-[32px] md:text-[60px] font-bold`}
      >
        {timeline}
      </p>
      <p className={`text-sm md:text-base ${isAlignRight ? 'text-right' : 'text-left'}`}>
        {transRes[0]}
      </p>
    </div>
  )
}

function Roadmap() {
  const transRes = useTranslation(['Lịch sử', 'hình thành', '& phát triển'])

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
      <div className="relative z-10 mx-auto max-w-maxContent">
        <Title className="text-center md:text-left">
          <span>{transRes[0]} </span>
          {transRes[1]} <br className="block md:hidden" /> {transRes[2]}
        </Title>
        <div className="hidden overflow-x-auto overflow-y-hidden mt-14 md:mt-20 md:block">
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

        <div className="block w-full mt-10 md:hidden">
          <div className="grid justify-center w-full grid-cols-2">
            <div>
              <div data-aos="fade-right" data-aos-duration="700" className="flex gap-8 mt-28">
                <RoadMapItem
                  isAlignRight
                  timeline="2014"
                  event="Top 10 Asian Mobile Affiliate Network"
                />
                <Line className="mt-6 max-w-[24px]" />
              </div>
              <div data-aos="fade-right" data-aos-duration="700" className="flex gap-8 mt-14">
                <RoadMapItem
                  isAlignRight
                  timeline="2019"
                  event=" Đạt $50M GMV. Ra mắt nền tảng Pushtimize"
                />
                <Line className="mt-6 max-w-[24px]" />
              </div>

              <div data-aos="fade-right" data-aos-duration="700" className="flex gap-8 mt-14">
                <RoadMapItem
                  isAlignRight
                  timeline="2022"
                  event="Trở thành Strategic Partner của AppsFlyer"
                />

                <Line className="mt-6 max-w-[24px]" />
              </div>
            </div>
            <div className="min-w-[123px] pb-10 flex flex-col border-l border-white border-opacity-25">
              <div data-aos="fade-left" data-aos-duration="700" className="flex gap-8 mt-5">
                <Line className="mt-6 max-w-[24px]" />
                <RoadMapItem timeline="2013" event="Thành lập AdFlex" />
              </div>
              <div data-aos="fade-left" data-aos-duration="700" className="flex gap-8 mt-24">
                <Line className="mt-6 max-w-[24px]" />
                <RoadMapItem
                  timeline="2016"
                  event="Phát triển ra thị trường Indonesia & Thái Lan"
                />
              </div>
              <div data-aos="fade-left" data-aos-duration="700" className="flex gap-8 mt-16">
                <Line className="mt-6  max-w-[24px]" />
                <RoadMapItem timeline="2020" event="Đánh dấu cột mốc phục vụ 20,000+ khách hàng" />
              </div>
              <div data-aos="fade-left" data-aos-duration="700" className="flex gap-8 mt-16">
                <Line className="mt-6  max-w-[24px]" />
                <RoadMapItem
                  isOutstanding
                  timeline="2023"
                  event="Trở thành Cloud & Service Partner của AWS, Google Cloud, Azure, Alibaba, HuaWei, TenCent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
