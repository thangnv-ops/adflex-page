/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Title from '../Title'
import Line from '../Line'

function Hero() {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="relative flex flex-col justify-end w-screen pt-64"
    >
      <div className="max-w-[930px] px-4 flex flex-col items-center mx-auto">
        <Title className="text-center">
          Tối ưu hóa hoạt động <span>Marketing</span> và&nbsp;
          <br className="hidden md:block" />
          <span>Chuyển đổi số</span> cho doanh nghiệp
        </Title>
        <div className="max-w-[510px] mx-auto mt-5">
          Với sức mạnh công nghệ vượt trội, AdFlex được xếp hạng Top 6 Mobile Marketing Agency về
          sản lượng và chất lượng dịch vụ trên toàn Đông Nam Á và được 100.000+ đối tác tin tưởng sử
          dụng giải pháp.
        </div>
        <img className="mt-16" src="/images/hero-img.png" alt="hero-img" />
      </div>
      <Line className="mx-auto mt-2 max-w-maxContent" />
      <img
        src="/images/hero-decor.png"
        alt="decor"
        className="absolute top-0 left-0 right-0 w-screen h-screen"
      />
    </div>
  )
}

export default Hero
