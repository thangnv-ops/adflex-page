import { ReactNode, useEffect, useRef, useState } from 'react'

import useTranslation from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import BriefUsModal from './BriefUsModal'
import LogoBlack from './LogoBlack'
import SecondaryBtn from './SecondaryBtn'
import SelectLanguageDropDown from './SelectLanguageDropDown'
import CloseDialogIcon from './icons/CloseDialogIcon'
import IconHamburger from './icons/IconHamburger'
import UpRightArrow from './icons/UpRightArrow'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

function MobileMenuItem({
  href = '',
  isActive = false,
  icon = null,
  label = '',
}: {
  href: string
  isActive?: boolean
  icon?: ReactNode
  label: string
}) {
  return (
    <motion.div variants={variants} whileTap={{ scale: 0.95 }} className="w-full">
      <Link href={href || '/'}>
        <div className="icon-active">{icon}</div>
        <p className={`text-2xl ${isActive ? 'font-bold' : 'text-primaryDark'}`}>{label}</p>
      </Link>
    </motion.div>
  )
}

function MobileNav() {
  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false)

  const router = useRouter()

  const toggleOpenMobileNav = () => {
    setIsOpenMobileNav(!isOpenMobileNav)
  }
  const node = useRef(null)

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (node.current?.contains(e.target)) {
      return
    }
    setIsOpenMobileNav(false)
  }

  useEffect(() => {
    if (isOpenMobileNav) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpenMobileNav])

  const sidebar = {
    open: (height = 1200) => ({
      pointerEvents: 'all',
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      zIndex: 99,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      pointerEvents: 'none',
      clipPath: 'circle(0px at 0px 0px)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  }

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  }

  const tranRes = useTranslation([
    'Trang chủ',
    'Giải pháp CPA',
    'Giải pháp Pushtimize',
    'Giải pháp Opsrun',
    'Liên hệ',
    'Tuyển dụng',
  ])

  return (
    <div ref={node} className="relative">
      <motion.div className="w-full">
        <div className="flex items-center gap-4">
          <IconHamburger onClick={toggleOpenMobileNav} />
        </div>
        <motion.div
          initial={false}
          animate={isOpenMobileNav ? 'open' : 'closed'}
          // @ts-ignore
          variants={sidebar}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: '100vw',
            overflowY: 'auto',
          }}
          className="bg-[#ffffff90] backdrop-blur-md text-black"
        >
          <motion.div variants={variants} className="h-full mt-0">
            <div className="flex items-center justify-end px-4 py-2 ">
              <CloseDialogIcon onClick={toggleOpenMobileNav} />
            </div>
            <div onClick={toggleOpenMobileNav} className="px-8">
              <Link href="/">
                <LogoBlack />
              </Link>

              <div className="flex flex-col gap-6 mt-16">
                <MobileMenuItem label={tranRes[0]} href="/" isActive={router?.asPath === '/'} />
                <MobileMenuItem
                  label={tranRes[1]}
                  href="/cpa"
                  isActive={router?.asPath.includes('/cpa')}
                />
                <MobileMenuItem
                  label={tranRes[2]}
                  href="/pushtimize"
                  isActive={router?.asPath.includes('/pushtimize')}
                />
                <MobileMenuItem
                  label={tranRes[3]}
                  href="/opsrun"
                  isActive={router?.asPath.includes('/opsrun')}
                />
                <MobileMenuItem
                  label={tranRes[4]}
                  href="/contact"
                  isActive={router?.asPath.includes('/contact')}
                />
                <MobileMenuItem
                  label="Blogs"
                  href="/blog"
                  isActive={router?.asPath.includes('/blog')}
                />
                <MobileMenuItem
                  label={tranRes[5]}
                  href="/jobs"
                  isActive={router?.asPath.includes('/jobs')}
                />
                <BriefUsModal>
                  <SecondaryBtn>
                    <div className="flex items-center gap-2">
                      <p className="text-black">Brief us</p>
                      <UpRightArrow />
                    </div>
                  </SecondaryBtn>
                </BriefUsModal>
                <div onClick={(e) => e.stopPropagation()}>
                  <SelectLanguageDropDown />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default MobileNav
