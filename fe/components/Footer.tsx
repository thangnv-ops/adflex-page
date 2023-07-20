import React from 'react'
import LogoBlack from './LogoBlack'
import Link from 'next/link'
import PrimaryInput from './PrimaryInput'
import PrimaryBtn from './PrimaryBtn'

function FooterItem({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href || '/'}>
      <a>{text}</a>
    </Link>
  )
}

function Footer() {
  return (
    <div className="px-4 pb-8 pt-28">
      <div data-aos="fade-up" data-aos-duration="700" className="flex justify-center">
        <LogoBlack />
      </div>
      <div className="mx-auto mt-24 text-black max-w-maxContent">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
        >
          <div className="grid items-center grid-cols-2 gap-8">
            <div className="flex flex-col gap-8 md:flex-row">
              <FooterItem text="Giải pháp CPA" href="/cpa" />
              <FooterItem text="Giải pháp Pushtimize" href="/pustimize" />
              <FooterItem text="Giải pháp Opsrun" href="/opsrun" />
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
              <FooterItem text="Liên hệ" href="/" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PrimaryInput placeholder="Nhập email của bạn" />
            <PrimaryBtn>Nhận thông tin</PrimaryBtn>
          </div>
        </div>
      </div>
      <p data-aos="fade-up" data-aos-duration="700" className="text-[#344054] text-center mt-10">
        (C) 2023 All right reserved.
      </p>
    </div>
  )
}

export default Footer
