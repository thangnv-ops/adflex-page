import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import PrimaryBtn from '../PrimaryBtn'
import Title from '../Title'

function Banner() {
  const content = useGetContent({
    componentName: Banner.name,
    defaultValue: ['Tăng ngay', 'tỉ lệ chuyển đổi', 'của bạn', 'Liên hệ tư vấn'],
  })
  const tranRes = useTranslation(content)
  return (
    <div
      style={{
        backgroundImage: 'url(/images/cpa/banner-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="text-black"
    >
      <div className="grid grid-cols-2 gap-10 max-w-[1150px] px-4 mx-auto items-center">
        <div>
          <Title>
            {tranRes[0]} <br className="hidden md:block" />
            {tranRes[1]} <br className="hidden md:block" />
            {tranRes[2]}
          </Title>
          <div data-aos="fade-up" data-aos-duration="700">
            <BriefUsModal>
              <PrimaryBtn className="mt-6">{tranRes[3]}</PrimaryBtn>
            </BriefUsModal>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" className="flex justify-center">
          <div className="w-[60%] aspect-[1/1.5] relative">
            <Image fill src="/images/cpa/ava.png" alt="ava" className="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
