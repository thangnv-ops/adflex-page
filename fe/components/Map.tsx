import React from 'react'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import SecondaryBtn from './SecondaryBtn'

function Map() {
  return (
    <div className="px-4 py-12 mx-auto max-w-maxContent">
      <div
        style={{
          backgroundImage: 'url(/images/map-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl"
      >
        <div className="flex flex-col px-4 py-4 md:px-20 md:py-24 ">
          <p className="text-[40px]">Giữ liên lạc với chúng tôi</p>
          <p className="mt-2 text-xl">Chúng tôi luôn muốn lắng nghe từ bạn</p>
          <PrimaryInput className="w-full mt-6" placeholder="Họ và tên" />
          <PrimaryInput className="w-full mt-6" placeholder="Email" />
          <PrimaryInput className="w-full mt-6" placeholder="Số điện thoại" />
          <PrimaryTextarea className="h-[128px] mt-6" placeholder="Thông tin bạn quan tâm" />
          <SecondaryBtn className="max-w-[216px] mt-6">Gửi thông tin</SecondaryBtn>
        </div>
        <div className="p-4 md:p-0">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.980414871609!2d105.78404967574954!3d20.993422180647144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad53b87226c1%3A0x8db6892d7e33a120!2zRWNvTGlmZSBU4buRIEjhu691!5e0!3m2!1svi!2s!4v1689585130721!5m2!1svi!2s"
            className="w-full h-[380px] md:h-full rounded-lg md:rounded-none md:rounded-r-2xl"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default Map
