import Image from 'next/image'
import SecondaryBtn from '../SecondaryBtn'
import Title from '../Title'
import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'

function WhatIsPushtimize() {
  const content = useGetContent({
    componentName: WhatIsPushtimize.name,
    defaultValue: [
      'là gì?',
      'Tìm hiểu thêm',
      `PUSHTIMIZE là hệ thống quảng cáo tự động, giúp kết nối các nhà quảng cáo với hàng
  triệu người dùng cùng lúc. Chúng tôi cung cấp đa dạng các loại hình quảng cáo với công
  nghệ ưu việt cho phép target chuyên sâu đến đúng đối tượng khách hàng và tối ưu hiệu
  quả marketing. Nhà quảng cáo có thể chủ động khởi tạo và quản lý các chiến dịch. Nhà
  xuất bản có thể tự tích hợp website và quản lý doanh thu .`,
    ],
  })
  const tranRes = useTranslation(content)

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url(/images/pushtimize/what-is-pushtimize-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="hidden md:block"
      >
        <div className="grid grid-cols-3 px-4 py-56 mx-auto gap-14 max-w-maxContent">
          <div className="flex flex-col items-end">
            <div className="w-[334px] aspect-[2/0.6] relative">
              <Image
                fill
                data-aos="fade-up"
                data-aos-duration="700"
                src="/images/pushtimize-icon.png"
                alt="cpa"
              />
            </div>
            <Title>{tranRes[0]}</Title>
            <div data-aos="fade-up" data-aos-duration="700">
              <a target="_blank" href="https://pushtimize.com/" rel="noreferrer">
                <SecondaryBtn className="mt-8">{tranRes[1]}</SecondaryBtn>
              </a>
            </div>
          </div>
          <div />

          <div>
            <p data-aos="fade-up" data-aos-duration="700" className="text-justify">
              {tranRes[2]}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] pt-16 block md:hidden">
        <div className="flex flex-col items-end px-4">
          <div className="w-[214px] md:w-[334px] aspect-[2/0.7] relative">
            <Image
              fill
              data-aos="fade-up"
              data-aos-duration="700"
              src="/images/pushtimize-icon.png"
              alt="cpa"
            />
          </div>
          <Title>{tranRes[0]}</Title>
          <div data-aos="fade-up" data-aos-duration="700">
            <a target="_blank" href="https://pushtimize.com/" rel="noreferrer">
              <SecondaryBtn className="mt-8">{tranRes[1]}</SecondaryBtn>
            </a>
          </div>
        </div>
        <div className="w-screen h-max-[462px] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full">
            <div
              className="h-[462px] w-full"
              style={{
                backgroundImage: 'url(/images/pushtimize/what-is-pushtimize-bg.png)',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />
            <div className="px-4 pt-12 pb-20 z-20">
              <p data-aos="fade-up" data-aos-duration="700" className="text-justify">
                {tranRes[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatIsPushtimize
