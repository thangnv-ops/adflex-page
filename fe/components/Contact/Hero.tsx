import React from 'react'

function Hero() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/contact/contact-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex flex-col items-center justify-center w-screen h-screen px-4"
    >
      <p className="text-lg md:text-2xl">Liên hệ</p>
      <p className="mt-2 text-[30px] md:text-5xl">Kết nối với chúng tôi</p>
    </div>
  )
}

export default Hero
