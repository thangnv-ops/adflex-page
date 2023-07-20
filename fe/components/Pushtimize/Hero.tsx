import React from 'react'
import SecondaryBtn from '../SecondaryBtn'
import QuaternaryBtn from '../QuaternaryBtn'

function Hero() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/pushtimize/pushtimize-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-32 md:h-screen pt-44"
    >
      <div className="grid items-center h-full grid-cols-1 px-4 mx-auto md:grid-cols-2 max-w-maxContent">
        <div>
          <img
            src="/images/pushtimize/pushtimize-hero-img.png"
            alt="img"
            className="mix-blend-screen"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full md:items-end">
          <img className="w-[214px] md:w-[334px]" src="/images/pushtimize-icon.png" alt="cpa" />
          <p className="mt-5 text-left md:text-right text-[32px]">
            Nền tảng quảng cáo tự động <br className="hidden md:block" /> đầu tiên tại Đông Nam Á
          </p>
          <p className="mt-5 text-sm text-left md:text-base md:text-right">
            Pushtimize đồng hành cùng bạn nâng cao hiệu suất marketing và gia tăng{' '}
            <br className="hidden md:block" /> thu nhập cho trang web thông qua đa dạng các định
            dạng quảng cáo.
          </p>
          <div className="flex gap-2 mt-5">
            <QuaternaryBtn className="px-5">
              <span className="text-sm md:text-base"> Đăng ký nhận brochure</span>
            </QuaternaryBtn>
            <SecondaryBtn className="px-5">
              <span className="text-sm md:text-base">Liên hệ tư vấn</span>
            </SecondaryBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
