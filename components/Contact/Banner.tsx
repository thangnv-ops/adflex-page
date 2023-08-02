import React from 'react'
import SecondaryBtn from '../SecondaryBtn'

function Banner() {
  return (
    <div className="px-4 mx-auto mt-32 max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        style={{
          backgroundImage: `url(/images/contact/contact-banner.png)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="flex items-center justify-center min-h-[320px] rounded-2xl"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="text-[30px] md:text-[40px] text-center">
            Bạn quan tâm đến việc làm tại Adflex?
          </p>
          <p className="text-sm md:text-lg max-w-[604px] text-center">
            Hãy theo dõi trang tuyển dụng của chúng tôi!
          </p>
          <SecondaryBtn className="w-[180px]">Tuyển dụng</SecondaryBtn>
        </div>
      </div>
    </div>
  )
}

export default Banner
