import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'
import Logo from './Logo'
import Line from './Line'
import SecondaryBtn from './SecondaryBtn'
import LogoBlack from './LogoBlack'
import UpRightArrow from './icons/UpRightArrow'
import BriefUsModal from './BriefUsModal'
import ProductDropdown from './ProductDropdown'
import SelectLanguageDropDown from './SelectLanguageDropDown'

function Item({
  children,
  href,
  isChange,
}: {
  children: string
  href: string
  isChange?: boolean
}) {
  return (
    <Link href={href || '/'}>
      <a>
        <p
          className={`${isChange ? 'text-black' : 'text-white'} hover:text-primary cursor-pointer`}
        >
          {children}
        </p>
      </a>
    </Link>
  )
}

function MainNav() {
  const [isChange, setIsChange] = useState(false)

  function changeColorNav() {
    if (window.scrollY > 160) {
      setIsChange(true)
    } else if (window.scrollY < 160) {
      setIsChange(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColorNav)
  }, [])

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="fixed top-0 left-0 right-0 z-[9999] w-screen shadow-md"
    >
      <div className={`${isChange ? 'bg-white' : 'bg-transparent'} smooth-transform`}>
        <div
          className={`flex max-w-maxContent mx-auto justify-between px-4 items-center py-2 md:py-[30px] text-gray `}
        >
          <div className="flex items-center gap-10">
            <Link href="/">
              <a>
                {isChange ? (
                  <LogoBlack className="w-[127px] h-10" />
                ) : (
                  <Logo className="w-[127px] h-10" />
                )}
              </a>
            </Link>

            <div
              className={`hidden md:flex items-center gap-8 text-black ${
                isChange ? 'md:visible' : 'md:hidden'
              }`}
            >
              <Item isChange={isChange} href="/">
                Trang chủ
              </Item>
              <ProductDropdown color="#000000" />
              <Item isChange={isChange} href="/contact">
                Liên hệ
              </Item>
            </div>
          </div>

          <div className="items-center hidden gap-20 md:flex">
            <SelectLanguageDropDown color={!isChange ? '#ffffff' : '#000000'} />
            <BriefUsModal>
              {isChange ? (
                <button
                  style={{
                    backgroundImage: 'url(/images/mainnav-btn-bg.png)',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                  }}
                  className="py-[10px] px-10 outline-none"
                  type="button"
                >
                  <div className="flex items-center gap-2">
                    <p className={`${isChange ? 'text-black' : 'text-white'} `}>Brief us</p>
                    <UpRightArrow />
                  </div>
                </button>
              ) : (
                <SecondaryBtn>
                  <div className="flex items-center gap-2">
                    <p className={`${isChange ? 'text-black' : 'text-white'} `}>Brief us</p>
                    <UpRightArrow />
                  </div>
                </SecondaryBtn>
              )}
            </BriefUsModal>
          </div>

          <div className="flex items-center md:hidden">
            <div className="ml-3 md:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto max-w-maxContent">
        {!isChange && <Line className="mx-auto max-w-maxContent" />}
      </div>
      <div
        className={`flex items-center gap-8 px-4 mx-auto mt-4 max-w-maxContent smooth-transform ${
          isChange ? 'hidden' : 'visible'
        }`}
      >
        <Item href="/">Trang chủ</Item>
        <ProductDropdown />
        <Item href="/contact">Liên hệ</Item>
      </div>
    </div>
  )
}

export default MainNav
