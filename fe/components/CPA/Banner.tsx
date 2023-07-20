import React from 'react'
import Title from '../Title'
import PrimaryBtn from '../PrimaryBtn'
import BriefUsModal from '../BriefUsModal'

function Banner() {
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
            Tăng ngay <br className="hidden md:block" />
            tỉ lệ chuyển đổi <br className="hidden md:block" />
            của bạn
          </Title>
          <div data-aos="fade-up" data-aos-duration="700">
            <BriefUsModal>
              <PrimaryBtn className="mt-6">Liên hệ tư vấn</PrimaryBtn>
            </BriefUsModal>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="700" className="flex justify-center">
          <img src="/images/cpa/ava.png" alt="ava" className="" />
        </div>
      </div>
    </div>
  )
}

export default Banner
