import React from 'react'
import Title from '../Title'
import SecondaryBtn from '../SecondaryBtn'

function WhatIsPushtimize() {
  return (
    <div>
      <div
        style={{
          backgroundImage: 'url(/images/pushtimize/what-is-pushtimize-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="hidden md:block"
      >
        <div className="grid grid-cols-3 px-4 py-56 mx-auto gap-14 max-w-maxContent">
          <div className="flex flex-col items-end">
            <img className="w-[334px]" src="/images/pushtimize-icon.png" alt="cpa" />
            <Title>là gì?</Title>
            <SecondaryBtn className="mt-8">Tìm hiểu thêm</SecondaryBtn>
          </div>
          <div />

          <div>
            <p className="text-justify">
              PUSHTIMIZE là hệ thống quảng cáo tự động, giúp kết nối các nhà quảng cáo với hàng
              triệu người dùng cùng lúc. Chúng tôi cung cấp đa dạng các loại hình quảng cáo với công
              nghệ ưu việt cho phép target chuyên sâu đến đúng đối tượng khách hàng và tối ưu hiệu
              quả marketing. Nhà quảng cáo có thể chủ động khởi tạo và quản lý các chiến dịch. Nhà
              xuất bản có thể tự tích hợp website và quản lý doanh thu .
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#121212] pt-16">
        <div className="flex flex-col items-end px-4">
          <img className="w-[214px] md:w-[334px]" src="/images/pushtimize-icon.png" alt="cpa" />
          <Title>là gì?</Title>
          <SecondaryBtn className="mt-8">Tìm hiểu thêm</SecondaryBtn>
        </div>
        <div className="">
          <img
            src="/images/pushtimize/what-is-pushtimize-bg.png"
            alt="pushtimize"
            className="h-[462px] w-[1060px] object-cover"
          />
        </div>

        <div className="px-4 pt-12 pb-20">
          <p className="text-justify">
            PUSHTIMIZE là hệ thống quảng cáo tự động, giúp kết nối các nhà quảng cáo với hàng triệu
            người dùng cùng lúc. Chúng tôi cung cấp đa dạng các loại hình quảng cáo với công nghệ ưu
            việt cho phép target chuyên sâu đến đúng đối tượng khách hàng và tối ưu hiệu quả
            marketing. Nhà quảng cáo có thể chủ động khởi tạo và quản lý các chiến dịch. Nhà xuất
            bản có thể tự tích hợp website và quản lý doanh thu .
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatIsPushtimize
