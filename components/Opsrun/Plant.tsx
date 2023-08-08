import { useRef, useState } from 'react'

import useTranslation from '@/hooks/useTranslation'
import Carousel from 'react-multi-carousel'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'
import StepBar from './StepBar/StepBar'

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
    title: 'Rà soát, phân tích hiện trạng',
    description:
      'Opsrun rà soát và đánh giá hiện trạng hệ thống thông tin hiện tại của doanh nghiệp. Sau đó tiến hành phân tích chuyên sâu và chỉ ra các lỗ hổng tài nguyên doanh nghiệp đang gặp phải',
  },
  {
    id: '2',
    title: 'Lên kế hoạch triển khai',
    description:
      'Lập kế hoạch chi tiết tối ưu tài nguyên thừa, phân bổ không hợp lý hoặc kế hoạch chuyển đổi hệ thống công nghệ thông tin lên Cloud.',
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
  const carouselRef = useRef(null)
  const [activatingSlide, setActivatingSlide] = useState(0)

  const goToSlide = (slideIndex: number) => {
    setActivatingSlide(slideIndex)
    carouselRef.current?.goToSlide(slideIndex + 2, true)
  }

  const tranRes = useTranslation(['Đăng ký ngay'])

  const transTitle = useTranslation(slides.map((item) => item.title))
  const transDes = useTranslation(slides.map((item) => item.description))

  const afterTranSlide = slides.map((item, index) => {
    return { ...item, title: transTitle[index], description: transDes[index] }
  })

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
      <StepBar goToSlide={goToSlide} activatingSlide={activatingSlide} />
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="px-4 mx-auto mt-16 max-w-maxContent"
      >
        <Carousel
          ref={carouselRef}
          className="w-full rounded-2xl"
          responsive={responsiveCarousel}
          containerClass="w-full "
          arrows
          autoPlay
          autoPlaySpeed={3000}
          infinite
          beforeChange={(nextSlide) => {
            let indexNextSlide = (nextSlide - 2) % slides.length
            if (indexNextSlide < 0) {
              indexNextSlide = slides.length - 1
            }
            setActivatingSlide(indexNextSlide)
          }}
        >
          {afterTranSlide.map((slide, index) => (
            <div
              key={`plant-${index}`}
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
                <BriefUsModal>
                  <SecondaryBtn className="w-[180px]">{tranRes[0]}</SecondaryBtn>
                </BriefUsModal>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Plant
