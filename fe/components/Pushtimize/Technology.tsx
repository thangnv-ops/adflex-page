import React, { useState } from 'react'
import Title from '../Title'
import CheckedIcon from '../icons/CheckedIcon'
import PrimaryBtn from '../PrimaryBtn'

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
  return (
    <div>
      <p className="text-xl font-medium">Giải pháp tối ưu hiệu quả marketing</p>
      <div className="flex flex-col gap-4 mt-8">
        {advantage.map((item, index) => (
          <div key={`pushtimize-${index}`} className="flex items-center gap-3">
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
  return (
    <div>
      <p className="text-xl font-medium">Giải pháp kiếm tiền tốt nhất dành cho nhà xuất bản</p>
      <div className="flex flex-col gap-4 mt-8">
        {advantage.map((item, index) => (
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
  const [tab, setTab] = useState('Với nhà quảng cáo')
  return (
    <div className="px-4 pt-20 pb-24 mx-auto md:pt-32 max-w-maxContent">
      <Title className="text-black">
        Nền tảng công nghệ vượt trội tối ưu
        <br className="hidden md:block" /> hiệu quả cho nhà quảng cáo,
        <br className="hidden md:block" />
        tối ưu doanh thu cho nhà xuất bản
      </Title>
      <div className="grid grid-cols-1 mt-8 md:grid-cols-46">
        <div className="text-black">
          <div className="flex items-center gap-3">
            <Tab tab={tab} setTab={setTab}>
              Với nhà quảng cáo
            </Tab>
            <Tab tab={tab} setTab={setTab}>
              Với nhà xuất bản
            </Tab>
          </div>
          <div className="mt-6">
            {tab === 'Với nhà quảng cáo' && <Advertisers />}
            {tab === 'Với nhà xuất bản' && <PublishingCompany />}
          </div>
          <PrimaryBtn className="mt-6">Đăng ký ngay</PrimaryBtn>
        </div>
        <div className="row-start-1 md:row-auto">
          <img src="/images/pushtimize/tech.png" alt="tech" />
        </div>
      </div>
    </div>
  )
}

export default Technology
