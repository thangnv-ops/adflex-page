import { useGetContent } from '@/hooks/useGetContent'
import Image from 'next/image'
import Line from '../Line'
import Title from '../Title'
/* eslint-disable @next/next/no-img-element */
import useTranslation from '@/hooks/useTranslation'

function Hero() {
  const content = useGetContent({
    componentName: Hero.name,
    defaultValue: [
      'Tối ưu hóa hoạt động',
      'Marketing',
      'và',
      'Chuyển đổi số',
      'cho doanh nghiệp',
      'Với sức mạnh công nghệ vượt trội, AdFlex được xếp hạng Top 6 Mobile Marketing Agency về sản lượng và chất lượng dịch vụ trên toàn Đông Nam Á và được 100.000+ đối tác tin tưởng sử dụng giải pháp.',
    ],
  })

  const result = useTranslation(content)

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className="relative flex flex-col justify-end w-screen pt-[409px] md:pt-64\ max-h-[800px] md:h-full"
    >
      <div className="max-w-[930px] px-4 flex flex-col items-center mx-auto ">
        <Title className="text-center">
          {result[0]} <span>{result[1]}</span> {result[2]}&nbsp;
          <br className="hidden md:block" />
          <span>{result[3]}</span> {result[4]}
        </Title>
        <div className="max-w-[510px] mx-auto mt-5 text-sm md:text-base text-center md:text-left">
          {result[5]}
        </div>
        <div className="w-full aspect-[2/1] relative">
          <Image fill className="hidden mt-16 md:block" src="/images/hero-img.png" alt="hero-img" />
        </div>
      </div>
      <Line className="mx-auto mt-24 max-w-maxContent" />
      <Image
        fill
        src="/images/hero-decor.png"
        alt="decor"
        className="absolute top-0 left-0 right-0 w-screen h-screen"
      />
    </div>
  )
}

export default Hero
