import React, { useState } from 'react'
import Title from '../Title'
import { AnimatePresence, motion } from 'framer-motion'
import ArrowDownIcon from '../icons/ArrowDownIcon'
import SecondaryBtn from '../SecondaryBtn'
import UpRightArrow from '../icons/UpRightArrow'

const listFAQ = [
  {
    id: 'quest1',
    question: 'AdFlex cung cấp dịch vụ gì?',
    answer:
      'AdFlex cung cấp giải pháp tối ưu hoạt động marketing và vận hành doanh nghiệp (cụ thể là: CPA, Pushtimize - hệ thống quảng cáo tự động với target chuyên sâu, Opsrun - Giải pháp xây dựng và vận hành hệ thống cloud server)',
  },
  {
    id: 'quest2',
    question: 'Lợi ích của bạn khi sử dụng giải pháp của AdFlex?',
    answer:
      'Tối ưu hiệu quả & tiết kiệm chi phí bởi nền tảng công nghệ cao, strong knowhow về ngành cũng như nhân sự chuyên nghiệp chất lượng cao.',
  },
  {
    id: 'quest3',
    question: 'Giải pháp CPA của AdFlex có gì khác biệt so với thị trường?',
    answer:
      'Sản lượng và chất lượng cao: volume và tỉ lệ khách hàng ở lại sau install app rất cao.',
  },
  {
    id: 'quest4',
    question: 'Tại sao bạn nên lựa chọn giải pháp Pushtimize?',
    answer:
      'Thay vì lãng phí thời gian và nguồn lực quảng cáo tràn lan, không đúng đối tượng, Pushtimize với công nghệ ưu việt cho phép target chuyên sâu đến đúng đối tượng khách hàng và tối ưu hiệu quả marketing.',
  },
  {
    id: 'quest5',
    question: 'Tại sao bạn nên sử dụng giải pháp của Opsrun trong quá trình chuyển đổi số?',
    answer:
      'Là đối tác phân phối của 6 nhà cung cấp cloud server lớn nhất thế giới (Google, Aws, Huwei, Alibaba, Azure, Tencen), Opsrun tự tin với đầy đủ năng lực giúp bạn tối ưu chi phí và gia tăng hiệu năng hệ thống.',
  },
  {
    id: 'quest6',
    question: 'Làm sao để liên hệ với AdFlex?',
    answer:
      'Trong trường hợp gấp, hãy gọi ngay đến hotline 012345 để được AdFlex tư vấn giúp bạn. Nếu bạn chưa vội, hãy điền thông tin cá nhân của bạn ngay phần liên hệ bên dưới nhé!',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [ispExpanded, setIspExpanded] = useState(false)
  return (
    <div className="py-6 border-b border-white border-opacity-20">
      <motion.header className="cursor-pointer" onClick={() => setIspExpanded(!ispExpanded)}>
        <div className="flex items-center justify-between w-full">
          <p
            className={`text-base md:text-2xl smooth-transform ${
              ispExpanded ? 'text-primary' : 'text-white'
            }`}
          >
            {question}
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
            <p className="text-sm md:text-xl">{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQs() {
  return (
    <div className="bg-[#0F0F0F] py-20 overflow-hidden">
      <div className="max-w-[910px] px-4 mx-auto relative">
        <img
          src="/images/faq-decor.png"
          alt="faq"
          className="absolute -bottom-[300px] -right-[300px]"
        />
        <Title>Có thể bạn quan tâm?</Title>
        <div className="relative z-10 mt-10">
          {listFAQ.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
          <SecondaryBtn className="mt-12">
            <div className="flex items-center gap-2">
              <p className="text-white">Đặt câu hỏi cho chúng tôi</p>
              <UpRightArrow />
            </div>
          </SecondaryBtn>
        </div>
      </div>
    </div>
  )
}

export default FAQs
