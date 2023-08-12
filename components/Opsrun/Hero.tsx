import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import SecondaryBtn from '../SecondaryBtn'

function Hero() {
  const content = useGetContent({
    componentName: Hero.name,
    defaultValue: [
      'Giải pháp thiết kế, triển khai, vận hành',
      'hệ thống công nghệ thông tin trên',
      'nền tảng cloud server',
      'Hỗ trợ doanh nghiệp trong quá trình chuyển đổi số.',
      'Bắt đầu',
    ],
  })
  const tranRes = useTranslation(content)

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/opsrun/opsrun-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-40 overflow-hidden pt-72"
    >
      <div className="grid items-start h-full grid-cols-1 px-4 mx-auto md:grid-cols-64 max-w-maxContent">
        <div className="flex flex-col justify-center h-full">
          <div className="w-[186px] md:w-[334px] aspect-[2/0.5] relative">
            <Image fill src="/images/opsrun-icon.png" alt="cpa" />
          </div>
          <p className="mt-5 !text-[28px] !md:text-[32px]">
            {tranRes[0]} <br className="hidden md:block" /> {tranRes[1]} <br /> {tranRes[2]}
          </p>
          <p className="mt-5 text-sm md:text-base">{tranRes[3]}</p>
          <div className="flex gap-2 mt-5">
            <Link href="https://opsrun.io/" target="_blank">
              <SecondaryBtn>{tranRes[4]}</SecondaryBtn>
            </Link>
          </div>
        </div>
        <div className="">
          <div className="static md:absolute -top-16 right-28 w-auto md:w-[900px] pt-24">
            <div className="w-full mix-blend-screen relative aspect-square">
              <Image fill src="/images/opsrun/opsrun-hero-img.png" alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
