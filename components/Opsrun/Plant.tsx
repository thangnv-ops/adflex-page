import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
import { useEffect, useMemo, useRef, useState } from 'react'

import { ContentRes } from '@/backend/service/content-service/content-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import Carousel from 'react-multi-carousel'
import { toast } from 'react-toastify'
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

const slides: ContentRes[] = [
  {
    _id: '1',
    route: '',
    componentName: '',
    content: [
      'Rà soát, phân tích hiện trạng',
      'Opsrun rà soát và đánh giá hiện trạng hệ thống thông tin hiện tại của doanh nghiệp. Sau đó tiến hành phân tích chuyên sâu và chỉ ra các lỗ hổng tài nguyên doanh nghiệp đang gặp phải',
    ],
  },
  {
    _id: '2',
    route: '',
    componentName: '',
    content: [
      'Lên kế hoạch triển khai',
      'Lập kế hoạch chi tiết tối ưu tài nguyên thừa, phân bổ không hợp lý hoặc kế hoạch chuyển đổi hệ thống công nghệ thông tin lên Cloud.',
    ],
  },
  {
    _id: '3',
    route: '',
    componentName: '',
    content: [
      'Triển khai',
      'Triển khai bởi đội ngũ chuyên gia chất lượng cao giàu kinh nghiệm: liên tục đo lường và tối ưu giải pháp',
    ],
  },
  {
    _id: '4',
    route: '',
    componentName: '',
    content: ['Bàn giao', 'Bàn giao và đào tạo đội ngũ vận hành'],
  },
  {
    _id: '5',
    route: '',
    componentName: '',
    content: ['Hỗ trợ sau bàn giao', 'Hỗ trợ 24/7 với các vấn đề phát sinh'],
  },
]

const TextItem = ({ slide }: { slide: ContentRes }) => {
  const tranDes = useTranslation(slide.content)

  return (
    <>
      <p className="text-2xl md:text-[40px] text-center">{tranDes[0]}</p>
      <p className="text-sm md:text-lg max-w-[604px] text-center">{tranDes[1]}</p>
    </>
  )
}

function Plant() {
  const carouselRef = useRef(null)
  const [activatingSlide, setActivatingSlide] = useState(0)

  const goToSlide = (slideIndex: number) => {
    setActivatingSlide(slideIndex)
    carouselRef.current?.goToSlide(slideIndex + 2, true)
  }

  const tranRes = useTranslation(['Đăng ký ngay'])

  const contentList = useApiCall<CommonListResult<ContentRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(
          contentEndpoints,
          'getList'
        )}?route=/opsrun&componentName=TextItem&page=1&size=5`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    contentList.setLetCall(true)
  }, [])

  const listMap = useMemo(() => {
    if (contentList.data?.result.data.length < slides.length) {
      return [
        ...contentList.data.result.data,
        ...slides.filter(
          (item, index) => index >= contentList.data?.result.data.length && index < slides.length
        ),
      ]
    }
    return contentList.data?.result.data || slides
  }, [contentList.data?.result])

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
            let indexNextSlide = (nextSlide - 2) % listMap.length
            if (indexNextSlide < 0) {
              indexNextSlide = listMap.length - 1
            }
            setActivatingSlide(indexNextSlide)
          }}
        >
          {listMap.map((slide, index) => (
            <div
              key={`plant-${index}`}
              style={{
                backgroundImage: `url(/images/opsrun/step-bg/${slides[index]._id}.png)`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
              className="flex items-center justify-center min-h-[320px] rounded-2xl"
            >
              <div className="flex flex-col items-center gap-4">
                <TextItem slide={slide} />
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
