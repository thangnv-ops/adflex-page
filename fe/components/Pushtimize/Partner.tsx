import React from 'react'
import Carousel from 'react-multi-carousel'
import Label from '../Home/Label'

const partners = ['batdongsan', 'dantri', 'phapluat', 'tgvn', 'tp', 'ttvh', 'vov']

const responsiveCarouselTournaments = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 2,
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
    <div>
      <div className="px-4 mx-auto max-w-maxContent">
        <Label className="bg-[#EAECF0]" startColor="#EAECF0" stopColor="#EAECF0">
          <p className="text-xl text-black uppercase">Đối tác của chúng tôi</p>
        </Label>
      </div>
      <div className="bg-[#EAECF0]">
        <div className="px-4 mx-auto max-w-maxContent py-7 md:py-14">
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
              <div className="px-4" key={partner}>
                <img
                  className="w-44"
                  src={`/images/pushtimize/partners/${partner}.png`}
                  alt={partner}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Partner
