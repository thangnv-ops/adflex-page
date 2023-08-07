import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'

function Hero() {
  const tranRes = useTranslation([
    'Giải pháp CPA đứng đầu về chất lượng & ',
    'sản lượng, giúp hoàn thành KPI nhanh chóng,',
    'hiệu quả, tối ưu chi phí marketing',
    'Đăng ký ngay',
  ])

  const longDes = useTranslation([
    'AdFlex là lựa chọn hàng đầu về chất lượng và sản lượng CPA tại Việt Nam nhờ nền tảng công nghệ vượt trội và kinh nghiệm 10+ năm trong lĩnh vực affiliate marketing.',
    'Bằng công nghệ vượt trội, và kinh nghiệm 10+ năm trong ngành, AdFlex là đối tác đáng tin cậy của hơn 10,000+ khách hàng đa lĩnh vực.',
  ])

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/cpa/cpa-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-32 pt-44"
    >
      <div className="grid items-center h-full grid-cols-1 gap-20 px-4 mx-auto md:grid-cols-2 md:gap-0 max-w-maxContent">
        <div className="w-[100%] relative aspect-square">
          <Image
            layout="fill"
            src="/images/cpa/cpa-hero-img.png"
            alt="img"
            className="mix-blend-screen"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full md:items-end">
          <div className="w-[81px] aspect-square relative">
            <Image layout="fill" src="/images/cpa-icon.png" alt="cpa" />
          </div>
          <p className="mt-5 text-left md:text-right text-[28px] md:text-[32px]">
            {tranRes[0]}
            <br className="hidden md:block" /> {tranRes[1]}
            <br className="hidden md:block" />
            {tranRes[2]}
          </p>
          <p className="mt-5 text-left md:text-right">
            {longDes[0]}
            <br className="hidden md:block" />
            <br />
            {longDes[1]}
          </p>
          <BriefUsModal>
            <SecondaryBtn className="mt-5">{tranRes[3]}</SecondaryBtn>
          </BriefUsModal>
        </div>
      </div>
    </div>
  )
}

export default Hero
