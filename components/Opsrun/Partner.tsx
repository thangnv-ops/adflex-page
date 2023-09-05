import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'

const partners = ['alibaba', 'aws', 'azure', 'gg', 'huawei', 'tencent']

const responsiveCarouselTournaments = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 3,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
    slidesToSlide: 1,
  },
}

function Partner() {
  const content = useGetContent({
    componentName: Partner.name,
    defaultValue: ['Opsrun tự hào là đại lý phân phối của top nhà cung cấp đứng đầu thế giới'],
  })
  const tranRes = useTranslation(content)

  return (
    <div className="bg-[#EAECF0]">
      <div className="px-4 mx-auto max-w-maxContent py-14">
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-center text-black text-xl md:text-[32px]"
        >
          {tranRes[0]}
        </p>
        <div data-aos="fade-up" data-aos-duration="700">
          <Carousel
            className="w-full"
            responsive={responsiveCarouselTournaments}
            containerClass="w-full"
            arrows={false}
            autoPlay
            autoPlaySpeed={2000}
            infinite
          >
            {partners.map((partner) => (
              <div key={partner} className="px-4 md:px-0">
                <div className=" flex content-center flex-wrap w-44 relative aspect-[2/1.5] ">
                  <Image
                    src={`/images/opsrun/partners/${partner}.png`}
                    alt={partner}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Partner
