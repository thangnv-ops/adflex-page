import React, { useState } from 'react'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import SecondaryBtn from './SecondaryBtn'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'

function Map() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [note, setNote] = useState('')

  return (
    <div className="px-4 py-12 mx-auto max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={300}
        style={{
          backgroundImage: 'url(/images/map-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay={500}
          className="flex flex-col px-4 py-4 text-black md:px-20 md:py-24"
        >
          <p className="text-[28px] md:text-[32px] text-white ">Đăng ký liên hệ hợp tác</p>
          <p className="mt-2 text-xl text-white">Chúng tôi luôn muốn lắng nghe từ bạn</p>
          <PrimaryInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-6"
            placeholder="Họ và tên"
          />
          <PrimaryInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-6"
            placeholder="Email"
          />
          <PrimaryInput
            value={String(phoneNumber)}
            onChange={(e) => setPhoneNumber(Number(e.target.value))}
            className="w-full mt-6"
            placeholder="Số điện thoại"
            type="number"
          />
          <PrimaryTextarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="h-[128px] mt-6"
            placeholder="Thông tin bạn quan tâm"
          />
          <SecondaryBtn
            onClick={() => handleSubmitForm({ name, email, phoneNumber, note })}
            className="max-w-[216px] mt-6 text-white"
          >
            Gửi thông tin
          </SecondaryBtn>
        </div>
        <div className="p-4 md:p-0">
          <iframe
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={700}
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
