import React from 'react'
import StepBar from './StepBar/StepBar'
import Carousel from 'react-multi-carousel'
import SecondaryBtn from '../SecondaryBtn'

const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1200, min: 768 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const slides = [
  {
    id: '1',
    title: 'Lên kế hoạch triển khai',
    description:
      'Lập kế hoạch chi tiết tối ưu tài nguyên thừa, phân bổ không hợp lý hoặc kế hoạch chuyển đổi hệ thống công nghệ thông tin lên Cloud.',
  },
  {
    id: '2',
    title: 'Rà soát, phân tích hiện trạng',
    description:
      'Opsrun rà soát và đánh giá hiện trạng hệ thống thông tin hiện tại của doanh nghiệp. Sau đó tiến hành phân tích chuyên sâu và chỉ ra các lỗ hổng tài nguyên doanh nghiệp đang gặp phải',
  },
  {
    id: '3',
    title: 'Triển khai',
    description:
      'Triển khai bởi đội ngũ chuyên gia chất lượng cao giàu kinh nghiệm: liên tục đo lường và tối ưu giải pháp',
  },
  {
    id: '4',
    title: 'Bàn giao',
    description: 'Bàn giao và đào tạo đội ngũ vận hành',
  },
  {
    id: '5',
    title: 'Hỗ trợ sau bàn giao',
    description: 'Hỗ trợ 24/7 với các vấn đề phát sinh',
  },
]

function Plant() {
  return (
    <div
      style={{
        backgroundImage: 'url(/images/opsrun/plant-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="pt-32 pb-32"
    >
      <StepBar />
      <div className="px-4 mx-auto mt-16 max-w-maxContent">
        <Carousel
          className="w-full rounded-2xl"
          responsive={responsiveCarousel}
          containerClass="w-full "
          arrows
          autoPlay
          autoPlaySpeed={3000}
          infinite
        >
          {slides.map((slide) => (
            <div
              style={{
                backgroundImage: `url(/images/opsrun/step-bg/${slide.id}.png)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="flex items-center justify-center min-h-[320px] rounded-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-2xl md:text-[40px] text-center">{slide.title}</p>
                <p className="text-sm md:text-lg max-w-[604px] text-center">{slide.description}</p>
                <SecondaryBtn className="w-[180px]">Đăng ký ngay</SecondaryBtn>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Plant
