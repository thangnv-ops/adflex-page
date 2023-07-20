import React from 'react'
import RedBtn from '../RedBtn'

function Banner() {
  return (
    <div className="px-4 mx-auto mt-12 max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={300}
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-black md:bg-[url(/images/pushtimize/pushtimize-banner.png)]"
      >
        <div className="p-6 md:p-12">
          <p className="text-2xl md:text-[40px]">
            Bạn muốn tối ưu hiệu quả quảng <br className="hidden md:block" /> cáo hoặc đẩy mạnh thu
            nhập?
          </p>
          <p className="mt-4">
            Đừng chần chừ, hãy để lại thông tin, chúng tôi sẽ liên hệ ngay với{' '}
            <br className="hidden md:block" /> bạn trong vòng 24h
          </p>
          <RedBtn className="mt-4">Đăng ký ngay</RedBtn>
        </div>
        <div className="block md:hidden">
          <img
            src="/images/pushtimize/pushtimize-banner-img.png"
            alt="img"
            className="rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
