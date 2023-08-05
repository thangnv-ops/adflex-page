import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LogoBlack from './LogoBlack'
import PrimaryBtn from './PrimaryBtn'
import PrimaryInput from './PrimaryInput'

function FooterItem({ text, href }: { text: string; href: string }) {
  return (
    <Link href={href || '/'}>
      <a>{text}</a>
    </Link>
  )
}

function Footer() {
  const tranRes = useTranslation([
    'Giải pháp CPA',
    'Giải pháp Pushtimize',
    'Giải pháp Opsrun',
    'Liên hệ',
    'Nhập email của bạn',
    'Nhận thông tin',
  ])

  return (
    <div className="px-4 pb-28 pt-28">
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
              <FooterItem text={tranRes[0]} href="/cpa" />
              <FooterItem text={tranRes[1]} href="/pushtimize" />
              <FooterItem text={tranRes[2]} href="/opsrun" />
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
              <FooterItem text={tranRes[3]} href="/" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PrimaryInput placeholder={tranRes[4]} />
            <PrimaryBtn>{tranRes[5]}</PrimaryBtn>
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
