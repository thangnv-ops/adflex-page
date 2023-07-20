import React from 'react'
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
  return (
    <div className="bg-[#EAECF0]">
      <div className="px-4 mx-auto max-w-maxContent py-14">
        <p className="text-center text-black text-xl md:text-[32px]">
          Opsrun tự hào là đại lý phân phối của top nhà cung cấp đứng đầu thế giới
        </p>
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
              <img className="w-44" src={`/images/opsrun/partners/${partner}.png`} alt={partner} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Partner
