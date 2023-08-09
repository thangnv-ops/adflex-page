import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import QuaternaryBtn from '../QuaternaryBtn'
import SecondaryBtn from '../SecondaryBtn'

function Hero() {
  const content = useGetContent({
    componentName: Hero.name,
    defaultValue: [
      'Nền tảng quảng cáo tự động',
      'đầu tiên tại Đông Nam Á',
      'Pushtimize đồng hành cùng bạn nâng cao hiệu suất marketing và gia tăng',
      'thu nhập cho trang web thông qua đa dạng các định dạng quảng cáo.',
      'Đăng ký nhận brochure',
      'Liên hệ tư vấn',
    ],
  })
  const tranRes = useTranslation(content)

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/pushtimize/pushtimize-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-32 pt-44"
    >
      <div className="grid items-center h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 max-w-maxContent">
        <div className="w-full aspect-square relative">
          <Image
            layout="fill"
            src="/images/pushtimize/pushtimize-hero-img.png"
            alt="img"
            className="mix-blend-screen"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full md:items-end">
          <div className="w-[214px] md:w-[334px] aspect-[2/0.5] relative">
            <Image layout="fill" src="/images/pushtimize-icon.png" alt="cpa" />
          </div>
          <p className="mt-5 text-left md:text-right text-[32px]">
            {tranRes[0]} <br className="hidden md:block" /> {tranRes[1]}
          </p>
          <p className="mt-5 text-sm text-left md:text-base md:text-right">
            {tranRes[2]} <br className="hidden md:block" /> {tranRes[3]}
          </p>
          <div className="flex gap-2 mt-5">
            <QuaternaryBtn className="px-5">
              <span className="text-sm md:text-base">{tranRes[4]}</span>
            </QuaternaryBtn>
            <BriefUsModal>
              <SecondaryBtn className="px-5">
                <span className="text-sm md:text-base">{tranRes[5]}</span>
              </SecondaryBtn>
            </BriefUsModal>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
