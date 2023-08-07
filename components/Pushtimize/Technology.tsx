import React, { useState } from 'react'

import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import PrimaryBtn from '../PrimaryBtn'
import Title from '../Title'
import CheckedIcon from '../icons/CheckedIcon'

function Tab({
  tab,
  setTab,
  children,
}: {
  tab: string
  setTab: React.Dispatch<React.SetStateAction<string>>
  children: string
}) {
  return (
    <div
      className={`${
        tab === children ? 'bg-[#F8CFCC]' : 'bg-transparent'
      } py-3 px-4 md:px-7 text-black rounded-lg cursor-pointer smooth-transform font-medium`}
      onClick={() => setTab(children)}
    >
      {children}
    </div>
  )
}

function Advertisers() {
  const advantage = [
    'Hệ thống công nghệ cao',
    '100% User chất lượng từ các web đã kiểm duyệt',
    'Dịch vụ 5 sao: hỗ trợ khách hàng 1:1',
    'Báo cáo chủ động, linh hoạt - real time',
  ]
  const tranRes = useTranslation(advantage)

  const tranTitle = useTranslation(['Giải pháp tối ưu hiệu quả marketing'])
  return (
    <div>
      <p data-aos="fade-up" data-aos-duration="700" className="text-xl font-medium">
        {tranTitle[0]}
      </p>
      <div className="flex flex-col gap-4 mt-8">
        {tranRes.map((item, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={300 + 100 * index}
            key={`pushtimize-${index}`}
            className="flex items-center gap-3"
          >
            <CheckedIcon />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function PublishingCompany() {
  const advantage = [
    'Đa dạng hình thức quảng cáo',
    'Đội ngũ hỗ trợ chuyên nghiệp',
    'Vận hành tối ưu',
    'Thanh toán linh hoạt',
  ]

  const tranRes = useTranslation(advantage)

  const tranTitle = useTranslation(['Giải pháp kiếm tiền tốt nhất dành cho nhà xuất bản'])

  return (
    <div>
      <p className="text-xl font-medium">{tranTitle[0]}</p>
      <div className="flex flex-col gap-4 mt-8">
        {tranRes.map((item, index) => (
          <div key={`pushtimize-${index}`} className="flex items-center gap-3">
            <CheckedIcon />
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function Technology() {
  const tranRes = useTranslation([
    'Với nhà quảng cáo',
    'Nền tảng công nghệ vượt trội tối ưu',
    'hiệu quả cho nhà quảng cáo,',
    'tối ưu doanh thu cho nhà xuất bản',
    'Với nhà xuất bản',
    'Đăng ký ngay',
  ])

  const [tab, setTab] = useState(tranRes[0])

  return (
    <div className="px-4 pt-20 pb-24 mx-auto md:pt-32 max-w-maxContent">
      <Title className="text-black !text-[28px] !md:text-[32px]">
        {tranRes[1]}
        <br className="hidden md:block" /> {tranRes[2]}
        <br className="hidden md:block" />
        {tranRes[3]}
      </Title>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-46">
        <div className="text-black">
          <div data-aos="fade-up" data-aos-duration="700" className="flex items-center gap-3">
            <Tab tab={tab} setTab={setTab}>
              {tranRes[0]}
            </Tab>
            <Tab tab={tab} setTab={setTab}>
              {tranRes[4]}
            </Tab>
          </div>
          <div className="mt-6">
            {tab === tranRes[0] && <Advertisers />}
            {tab === tranRes[4] && <PublishingCompany />}
          </div>
          <div data-aos="fade-up" data-aos-duration="700">
            <BriefUsModal>
              <PrimaryBtn className="mt-6">{tranRes[5]}</PrimaryBtn>
            </BriefUsModal>
          </div>
        </div>
        <div className="row-start-1 md:row-auto">
          <div className="w-full aspect-[2/1.3] relative">
            <Image
              layout="fill"
              data-aos="fade-up"
              data-aos-duration="700"
              src="/images/pushtimize/tech.png"
              alt="tech"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technology
