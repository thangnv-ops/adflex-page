import React from 'react'
import Title from '../Title'
import SecondaryBtn from '../SecondaryBtn'
import RenewIcon from '../icons/RenewIcon'
import LikeIcon from '../icons/LikeIcon'
import QualityIcon from '../icons/QualityIcon'
import EffectiveIcon from '../icons/EffectiveIcon'

function Whyus() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/cpa/whyus-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-4 py-20 mx-auto max-w-maxContent">
        <div className="flex items-center justify-between">
          <div>
            <Title>Lý do nên lựa chọn chúng tôi</Title>
            <SecondaryBtn className="mt-8">Đăng ký ngay</SecondaryBtn>
          </div>
          <div
            style={{
              backgroundImage: 'url(/images/cpa/renew-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="hidden md:flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <RenewIcon />
            <p className="mt-4 text-2xl">Đổi mới</p>
          </div>
        </div>
        <div className="items-center justify-end hidden grid-cols-2 gap-2 mt-2 md:flex">
          <div
            style={{
              backgroundImage: 'url(/images/cpa/professional-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <LikeIcon />
            <p className="mt-4 text-2xl">Chuyên nghiệp</p>
          </div>
          <div className="flex flex-col justify-center items-center w-[312px] h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl">
            <QualityIcon />
            <p className="mt-4 text-2xl">Chất lượng</p>
          </div>
          <div
            style={{
              backgroundImage: 'url(/images/cpa/effctive-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <EffectiveIcon />
            <p className="mt-4 text-2xl">Hiệu quả</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-12">
          <div className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl">
            <LikeIcon />
            <p className="mt-4 text-2xl">Chuyên nghiệp</p>
          </div>
          <div className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl">
            <RenewIcon />
            <p className="mt-4 text-2xl">Đổi mới</p>
          </div>
          <div className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl">
            <QualityIcon />
            <p className="mt-4 text-2xl">Chất lượng</p>
          </div>
          <div className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl">
            <EffectiveIcon />
            <p className="mt-4 text-2xl">Hiệu quả</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus
