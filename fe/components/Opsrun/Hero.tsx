import React from 'react'
import SecondaryBtn from '../SecondaryBtn'
import BriefUsModal from '../BriefUsModal'

function Hero() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/opsrun/opsrun-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-32 overflow-hidden pt-72"
    >
      <div className="grid items-start h-full grid-cols-1 px-4 mx-auto md:grid-cols-64 max-w-maxContent">
        <div className="flex flex-col justify-center h-full ">
          <img className="w-[186px] md:w-[334px]" src="/images/opsrun-icon.png" alt="cpa" />
          <p className="mt-5 text-[28px] md:text-[48px]">
            Giải pháp thiết kế, triển khai, vận <br className="hidden md:block" /> hành hệ thống
            công nghệ thông <br /> tin trên nền tảng cloud server
          </p>
          <p className="mt-5 text-sm md:text-base">
            Hỗ trợ doanh nghiệp trong quá trình chuyển đổi số.
          </p>
          <div className="flex gap-2 mt-5">
            <BriefUsModal>
              <SecondaryBtn>Bắt đầu</SecondaryBtn>
            </BriefUsModal>
          </div>
        </div>
        <div className="static row-start-1 md:relative md:row-auto">
          <div className="static md:absolute top-0 right-0 w-auto md:w-[800px]">
            <img src="/images/opsrun/opsrun-hero-img.png" alt="img" className="mix-blend-screen " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
