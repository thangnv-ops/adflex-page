import React from 'react'
import SecondaryBtn from '../SecondaryBtn'
import BriefUsModal from '../BriefUsModal'

function Hero() {
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
      className="h-auto pb-32 md:h-screen pt-44"
    >
      <div className="grid items-center h-full grid-cols-1 gap-20 px-4 mx-auto md:grid-cols-2 md:gap-0 max-w-maxContent">
        <div>
          <img src="/images/cpa/cpa-hero-img.png" alt="img" className="mix-blend-screen" />
        </div>
        <div className="flex flex-col items-start justify-center h-full md:items-end">
          <img className="w-[81px]" src="/images/cpa-icon.png" alt="cpa" />
          <p className="mt-5 text-left md:text-right text-[28px] md:text-[32px]">
            Giải pháp CPA đứng đầu về chất lượng & <br className="hidden md:block" /> sản lượng,
            giúp hoàn thành KPI nhanh
            <br className="hidden md:block" />
            chóng, hiệu quả, tối ưu chi phí marketing
          </p>
          <p className="mt-5 text-left md:text-right">
            AdFlex là lựa chọn hàng đầu về chất lượng và sản lượng CPA tại Việt Nam nhờ nền tảng
            công nghệ vượt trội và kinh nghiệm 10+ năm trong lĩnh vực affiliate marketing.{' '}
            <br className="hidden md:block" />
            <br />
            Bằng công nghệ vượt trội, và kinh nghiệm 10+ năm trong ngành, AdFlex là đối tác đáng tin
            cậy của hơn 10,000+ khách hàng đa lĩnh vực.
          </p>
          <BriefUsModal>
            <SecondaryBtn className="mt-5">Đăng ký ngay</SecondaryBtn>
          </BriefUsModal>
        </div>
      </div>
    </div>
  )
}

export default Hero
