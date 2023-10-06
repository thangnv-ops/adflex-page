import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

import { ContentRes } from '@/backend/service/content-service/content-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import Image from 'next/image'
import { toast } from 'react-toastify'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'
import Title from '../Title'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import UpRightArrow from '../icons/UpRightArrow'

const listFAQ: ContentRes[] = [
  {
    _id: 'quest1',
    route: '',
    componentName: '',
    content: [
      'AdFlex cung cấp dịch vụ gì?',
      'AdFlex cung cấp giải pháp tối ưu hoạt động marketing và vận hành doanh nghiệp (cụ thể là: CPA, Pushtimize - hệ thống quảng cáo tự động với target chuyên sâu, Opsrun - Giải pháp xây dựng và vận hành hệ thống cloud server)',
    ],
  },
  {
    _id: 'quest2',
    route: '',
    componentName: '',
    content: [
      'Lợi ích của bạn khi sử dụng giải pháp của AdFlex?',
      'Tối ưu hiệu quả & tiết kiệm chi phí bởi nền tảng công nghệ cao, strong knowhow về ngành cũng như nhân sự chuyên nghiệp chất lượng cao.',
    ],
  },
  {
    _id: 'quest3',
    route: '',
    componentName: '',
    content: [
      'Giải pháp CPA của AdFlex có gì khác biệt so với thị trường?',
      'Sản lượng và chất lượng cao: volume và tỉ lệ khách hàng ở lại sau install app rất cao.',
    ],
  },
  {
    _id: 'quest4',
    route: '',
    componentName: '',
    content: [
      'Tại sao bạn nên lựa chọn giải pháp Pushtimize?',
      'Thay vì lãng phí thời gian và nguồn lực quảng cáo tràn lan, không đúng đối tượng, Pushtimize với công nghệ ưu việt cho phép target chuyên sâu đến đúng đối tượng khách hàng và tối ưu hiệu quả marketing.',
    ],
  },
  {
    _id: 'quest5',
    route: '',
    componentName: '',
    content: [
      'Tại sao bạn nên sử dụng giải pháp của Opsrun trong quá trình chuyển đổi số?',
      'Là đối tác phân phối của 6 nhà cung cấp cloud server lớn nhất thế giới (Google, Aws, Huwei, Alibaba, Azure, Tencen), Opsrun tự tin với đầy đủ năng lực giúp bạn tối ưu chi phí và gia tăng hiệu năng hệ thống.',
    ],
  },
  {
    _id: 'quest6',
    route: '',
    componentName: '',
    content: [
      'Làm sao để liên hệ với AdFlex?',
      'Trong trường hợp gấp, hãy gọi ngay đến hotline 0345036008 (Uyển) để được AdFlex tư vấn giúp bạn. Nếu bạn chưa vội, hãy điền thông tin cá nhân của bạn ngay phần liên hệ bên dưới nhé!',
    ],
  },
]

function FAQItem({ item }: { item: ContentRes }) {
  const [ispExpanded, setIspExpanded] = useState(false)
  const tranRes = useTranslation(item.content)

  return (
    <div className="py-6 border-b border-white border-opacity-20">
      <motion.header className="cursor-pointer" onClick={() => setIspExpanded(!ispExpanded)}>
        <div className="flex items-center justify-between w-full">
          <p
            className={`text-base md:text-2xl smooth-transform ${
              ispExpanded ? 'text-primary' : 'text-white'
            }`}
          >
            {tranRes[0]}
          </p>
          <ArrowDownIcon
            className={`${ispExpanded ? 'rotate-180' : 'rotate-0'} smooth-transform`}
            color={ispExpanded ? '#DD1000' : '#ffffff'}
          />
        </div>
      </motion.header>

      <AnimatePresence initial={false}>
        {ispExpanded && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto', marginTop: '20px' },
              collapsed: {
                opacity: 0,
                height: 0,
                animationDelay: '1',
                marginTop: 0,
              },
            }}
            transition={{
              duration: 0.4,
              ease: [0.04, 0.62, 0.73, 0.98],
            }}
            className="pr-9"
          >
            <p className="text-sm md:text-xl">{tranRes[1]}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQs() {
  const tranRes = useTranslation(['Có thể bạn quan tâm?', 'Đăng ký liên hệ hợp tác'])

  const contentList = useApiCall<CommonListResult<ContentRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(contentEndpoints, 'getList')}?route=/&componentName=FAQItem&page=1&size=10`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    contentList.setLetCall(true)
  }, [])

  const lists = useMemo(() => {
    if (contentList?.data?.result.data.length < listFAQ.length) {
      return [
        ...contentList.data.result.data,
        ...listFAQ.filter(
          (item, index) => index >= contentList.data.result.data.length && index < listFAQ.length
        ),
      ]
    }
    return contentList?.data?.result.data || listFAQ
  }, [contentList.data?.result.data])

  return (
    <div className="bg-[#0F0F0F] py-20 overflow-hidden">
      <div className="max-w-[910px] px-4 mx-auto relative">
        <Image
          fill
          src="/images/faq-decor.png"
          alt="faq"
          className="absolute -bottom-[300px] -right-[300px]"
        />
        <Title>{tranRes[0]}</Title>
        <div className="relative z-10 mt-10">
          {lists.map((faq) => (
            <div key={faq._id} data-aos="fade-up" data-aos-duration="700">
              <FAQItem item={faq} />
            </div>
          ))}
          <BriefUsModal>
            <SecondaryBtn data-aos="fade-up" data-aos-duration="700" className="mt-12">
              <div className="flex items-center gap-2">
                <p className="text-white">{tranRes[1]}</p>
                <UpRightArrow />
              </div>
            </SecondaryBtn>
          </BriefUsModal>
        </div>
      </div>
    </div>
  )
}

export default FAQs
