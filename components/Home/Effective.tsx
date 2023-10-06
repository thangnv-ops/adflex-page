import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
import { useEffect, useId, useMemo } from 'react'

import { ContentRes } from '@/backend/service/content-service/content-res'
import { useApiCall } from '@/hooks/useCallApi'
import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { toast } from 'react-toastify'
import BriefUsModal from '../BriefUsModal'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import Title from '../Title'
import UpRightArrow from '../icons/UpRightArrow'

const effectives: ContentRes[] = [
  {
    route: '',
    componentName: '',
    _id: 'contentment',
    content: ['98%', 'Tỉ lệ khách hàng hài lòng'],
  },
  {
    route: '',
    componentName: '',
    _id: 'expense',
    content: ['30%', 'Tỉ lệ chi phí tiết kiệm'],
  },
  {
    route: '',
    componentName: '',
    _id: 'Optimal',
    content: ['25%', 'Tỉ lệ tối ưu hiệu quả quảng cáo'],
  },
  {
    route: '',
    componentName: '',
    _id: 'kpi',
    content: ['100%', 'Tỉ lệ hoàn thành KPI'],
  },
]

const EffectiveItem = ({ item, index }: { index: number; item: ContentRes }) => {
  const tranRes = useTranslation([item.content[1], 'Liên hệ tư vấn'])

  const id = useId()

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={300 + 100 * index}
      key={id}
      className="py-4 md:py-6 bg-white rounded-2xl smooth-transform bg-opacity-5 hover:bg-opacity-25 effective-item h-[233px] md:h-[312px] flex flex-col justify-between backdrop-blur-xl"
    >
      <div>
        <p className="px-4 text-[40px] font-bold md:px-6 md:text-[56px]">{item.content[0]}</p>
        <Line className="my-4" />
        <p className="px-4 text-base md:text-xl md:px-6">{tranRes[0]}</p>
      </div>
      <div className="px-4 md:px-6 effective-btn">
        <BriefUsModal>
          <PrimaryBtn className="w-full mt-4 md:mt-8">
            <div className="flex items-center justify-center gap-2">
              <p className="text-white">{tranRes[1]}</p>
              <UpRightArrow />
            </div>
          </PrimaryBtn>
        </BriefUsModal>
      </div>
    </div>
  )
}

function Effective() {
  const contentList = useApiCall<CommonListResult<ContentRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(
          contentEndpoints,
          'getList'
        )}?route=/&componentName=Effective-Content&page=1&size=4`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    contentList.setLetCall(true)
  }, [])

  const content = useGetContent({
    componentName: Effective.name,
    defaultValue: [
      'Hiệu quả AdFlex',
      'mang lại cho khách hàng',
      ` Với khả năng làm việc chuyên nghiệp cùng công nghệ vượt trội cho phép AdFlex giải quyết
      mọi vấn đề khó khăn nhất trong quá trình chinh phục KPI tiếp cận khách hàng cũng như
      quản trị doanh nghiệp của đối tác trên mọi lĩnh vực`,
    ],
  })
  const tranRes = useTranslation(content)

  const lists = useMemo(() => {
    if (contentList?.data?.result.data.length < effectives.length) {
      return [
        ...contentList.data.result.data,
        ...effectives.filter(
          (item, index) => index >= contentList.data.result.data.length && index < effectives.length
        ),
      ]
    }
    return contentList?.data?.result.data || effectives
  }, [contentList.data?.result.data])

  return (
    <div
      style={{
        backgroundImage: 'url(/images/effective-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
      }}
      className="px-4 pt-32 pb-10 md:pb-40"
    >
      <div className="mx-auto max-w-maxContent">
        <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
          <Title>
            <span>{tranRes[0]}</span> <br />
            {tranRes[1]}
          </Title>
          <p data-aos="fade-up" data-aos-duration="700" className="max-w-[435px] text-justify">
            {tranRes[2]}
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4 mt-16 md:gap-8 md:grid-cols-4">
          {lists.map((item, index) => (
            <EffectiveItem item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Effective
