import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import { ReactNode } from 'react'
import Line from '../Line'
import AfiliateIcon from '../icons/AfiliateIcon'
import CloudServeIcon from '../icons/CloudServeIcon'
import EkycIcon from '../icons/EkycIcon'
import MobileCPAICon from '../icons/MobileCPAICon'
import PushtimizeAdsIcon from '../icons/PushtimizeAdsIcon'
import SmsIcon from '../icons/SmsIcon'

const solutions = [
  {
    id: 'mobile',
    title: 'Mobile CPA',
    description: 'Giải pháp gia tăng tỉ lệ chuyển đổi quảng cáo',
    icon: <MobileCPAICon />,
  },
  {
    id: 'pushtimize',
    title: 'Pushtimize Ads Network',
    description: 'Nền tảng quản cáo tự động',
    icon: <PushtimizeAdsIcon />,
  },
  {
    id: 'affiliate',
    title: 'Affiliate network',
    description: 'Giải pháp gia tăng tỉ lệ chuyển đổi quảng cáo',
    icon: <AfiliateIcon />,
  },
  {
    id: 'EKYC',
    title: 'EKYC',
    description: 'Giải pháp định danh người dùng điện tử',
    icon: <EkycIcon />,
  },
  {
    id: 'SMS',
    title: 'SMS Brandname & Mize ID',
    description: 'Giải pháp định danh người dùng điện tử',
    icon: <SmsIcon />,
  },
  {
    id: 'Cloud',
    title: 'Cloud Server',
    description: 'Giải pháp thiết kế, xây dựng và quản trị hệ thống Cloud Server',
    icon: <CloudServeIcon />,
  },
]

function Item({
  title,
  description,
  icon,
  isAlignRight = false,
}: {
  title: string
  description: string
  icon: ReactNode
  isAlignRight?: boolean
}) {
  const tranRes = useTranslation([title, description])

  return (
    <div
      className={`p-4 md:p-6 bg-white border border-white bg-opacity-5 rounded-2xl border-opacity-20 flex flex-col ${
        isAlignRight ? 'items-end' : ''
      }`}
    >
      {icon}
      <p className={`mt-4 text-xl md:text-2xl font-medium ${isAlignRight && 'text-right'}`}>
        {tranRes[0]}
      </p>
      <p className={`text-sm md:text-base mt-4 ${isAlignRight && 'text-right'}`}>{tranRes[1]}</p>
    </div>
  )
}

function Solutions() {
  const tranRes = useTranslation([
    'Tích hợp đa dạng các giải pháp',
    'phù hợp nhu cầu của khách hàng',
    'Tích hợp đa dạng các giải pháp phù hợp nhu cầu của khách hàng',
  ])

  return (
    <div className="bg-[#1A1A1A] pt-28 pb-28 relative overflow-hidden">
      <Image
        layout="fill"
        src="/images/cpa/solutions-decor1.png"
        alt="decor"
        className="absolute -top-10 -right-[100px] md:-top-[300px] md:-right-[300px]"
      />
      <Image
        layout="fill"
        src="/images/cpa/solutions-decor2.png"
        alt="decor"
        className="absolute -bottom-11 -left-14 md:-bottom-[500px] md:-left-[700px]"
      />
      <div className="hidden px-4 mx-auto max-w-maxContent md:block">
        <div className="grid grid-cols-4 gap-8">
          {solutions.slice(0, 3).map((i, index) => (
            <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={300 + 100 * index}>
              <Item key={i.id} title={i.title} description={i.description} icon={i.icon} />
            </div>
          ))}
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" className="mt-8" />

        <p data-aos="fade-up" data-aos-duration="700" className="text-center text-[32px] mt-8">
          {tranRes[0]} <br /> {tranRes[1]}
        </p>
        <Line data-aos="fade-up" data-aos-duration="700" className="mt-8" />
        <div className="grid grid-cols-4 gap-8 mt-8">
          <div />
          {solutions.slice(3, solutions.length).map((i, index) => (
            <div
              key={`sol-1-${index}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
            >
              <Item
                isAlignRight
                key={i.id}
                title={i.title}
                description={i.description}
                icon={i.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="block px-4 mx-auto max-w-maxContent md:hidden">
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-center text-[28px] md:text-[48px]"
        >
          {tranRes[3]}
        </p>
        <Line data-aos="fade-up" data-aos-duration="700" className="my-8" />

        <div className="grid grid-cols-2 gap-4">
          {solutions.map((i, index) => (
            <div
              key={`sol-2-${index}`}
              data-aos="fade-up"
              data-aos-duration="700"
              className="flex"
              data-aos-delay={300 + 100 * index}
            >
              <Item key={i.id} title={i.title} description={i.description} icon={i.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Solutions
