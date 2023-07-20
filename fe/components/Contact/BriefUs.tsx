import React from 'react'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'

function BriefUs() {
  return (
    <div className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10"
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">
          Chúng tôi luôn muốn lắng nghe từ bạn
        </p>
        <p className="mt-2 text-xl">Hãy cho chúng tôi biết ý tưởng của bạn.</p>
        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <PrimaryInput placeholder="Họ và tên" className="w-full" />
            <PrimaryInput placeholder="Email" className="w-full" />
            <PrimaryInput placeholder="Số điện thoại" className="w-full" />
          </div>
          <div>
            <PrimaryTextarea placeholder="Thông tin bạn quan tâm" />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-8 mt-6 md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <p className="text-black">Nhận thông tin từ Adflex</p>
          </div>
          <PrimaryBtn className="w-full md:w-auto">Gửi thông tin</PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default BriefUs
