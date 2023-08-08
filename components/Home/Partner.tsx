import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import Label from './Label'

const partners = ['cake', 'mb', 'msb', 'shopee', 'tpbank', 'vng', 'vpbank']

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
    defaultValue: ['Đối tác của chúng tôi'],
  })
  const tranRes = useTranslation(content)
  return (
    <div>
      <div data-aos="fade-up" data-aos-duration="700" className="px-4 mx-auto max-w-maxContent">
        <Label className="bg-[#EAECF0]" startColor="#EAECF0" stopColor="#EAECF0">
          <p className="text-xl text-black uppercase">{tranRes[0]}</p>
        </Label>
      </div>
      <div className="bg-[#EAECF0]">
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="px-4 py-0 mx-auto max-w-maxContent md:py-14"
        >
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
              <div className="w-44 relative aspect-[2/1.5]">
                <Image fill key={partner} src={`/images/partners/${partner}.png`} alt={partner} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Partner
