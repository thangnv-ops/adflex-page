import useTranslation from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import ArrowDropdownIcon from './icons/ArrowDropdownIcon'

function DropDownItem({ label = '', href = '' }: { label: string; href: string }) {
  return (
    <Link href={href || '/'}>
      <a>
        <div className="px-2 hover:text-primary">{label}</div>
      </a>
    </Link>
  )
}

function ProductDropdown({
  className = '',
  color = '#fff',
}: {
  className?: string
  color?: string
}) {
  const node = useRef(null)
  const [isOpen, toggleOpen] = useState(false)

  const tranRes = useTranslation(['Giải pháp'])

  const toggleOpenMenu = () => {
    toggleOpen(!isOpen)
  }

  const handleClickOutside = (e: any) => {
    // @ts-ignore
    if (node.current?.contains(e.target)) {
      return
    }
    toggleOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.2,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.2,
        delay: 0.05,
      },
      transitionEnd: {
        display: 'none',
      },
    },
  }

  return (
    <motion.div className={`relative text-white ${className}`}>
      <div
        ref={node}
        onClick={toggleOpenMenu}
        className="flex items-center gap-1 p-2 cursor-pointer"
      >
        <p style={{ color }} className="hover:!text-primary">
          {tranRes[0]}
        </p>
        <div className={`${isOpen && 'rotate-180'} smooth-transform `}>
          <ArrowDropdownIcon color={color} />
        </div>
      </div>

      <motion.div
        initial="exit"
        animate={isOpen ? 'enter' : 'exit'}
        variants={subMenuAnimate}
        className="absolute right-0 w-full bg-black"
        style={{
          borderRadius: 15,
          transformOrigin: '50% -30px',
          zIndex: 1,
        }}
      >
        <div className="flex flex-col gap-4 py-4">
          <DropDownItem label="CPA" href="/cpa" />
          <DropDownItem label="Pushtimize" href="/pushtimize" />
          <DropDownItem label="Opsrun.io" href="/opsrun" />
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ProductDropdown
