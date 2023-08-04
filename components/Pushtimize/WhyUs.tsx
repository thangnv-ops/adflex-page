import useTranslation from '@/hooks/useTranslation'
import { ReactNode } from 'react'
import Line from '../Line'
import Title from '../Title'
import CardIcon from '../icons/Pushtimize/CardIcon'
import CpuIcon from '../icons/Pushtimize/CpuIcon'
import PersonIcon from '../icons/Pushtimize/PersonIcon'
import PhoneIcon from '../icons/Pushtimize/PhoneIcon'
import QualityIcon from '../icons/Pushtimize/QualityIcon'
import UptrendIcon from '../icons/Pushtimize/UptrendIcon'

const solutions = [
  {
    id: 'sol-1',
    title: 'Công nghệ vượt trội',
    description:
      'Chúng tôi áp dụng công nghệ hàng đầu về tự động hoá, cá nhân hoá, big data và trí tuệ nhân tạo giúp tối ưu hiệu quả chiến dịch & doanh thu.',
    icon: <CpuIcon />,
  },
  {
    id: 'sol-2',
    title: 'Tập trung vào chất lượng',
    description:
      '100% người dùng thật đến từ các website đã được kiểm duyệt cùng hệ thống phát hiện và ngăn chặn gian lận tiên tiến.',
    icon: <QualityIcon />,
  },
  {
    id: 'sol-3',
    title: 'Bắt kịp xu hướng',
    description:
      'Pushtimize luôn đổi mới và cập nhật xu hướng giúp sản phẩm tiếp cận gần hơn với tập khách hàng tiềm năng đến từ các website chất lượng nhất.',
    icon: <UptrendIcon />,
  },
  {
    id: 'sol-4',
    title: 'Hỗ trợ 1:1',
    description:
      'Chúng tôi có chính sách hỗ trợ khách hàng 1:1, phản hồi nhanh chóng và nhiệt tình tất cả vấn đề của bạn.',
    icon: <PhoneIcon />,
  },
  {
    id: 'sol-5',
    title: 'Nhà quảng cáo nắm quyền chủ động',
    description:
      'Nhà quảng cáo có thể tự khởi tạo và theo dõi chiến dịch dựa trên báo cáo real-time, chủ động lựa chọn các định dạng quảng cáo phù hợp với sản phẩm, dịch vụ.',
    icon: <PersonIcon />,
  },
  {
    id: 'sol-6',
    title: 'Thanh toán 24/7',
    description:
      'Không cần chờ tới cuối tháng, nhà xuất bản có thể rút tiền và nhận doanh thu hàng tuần với mức tối thiểu là 10 USD.',
    icon: <CardIcon />,
  },
]

function Item({
  title,
  description,
  icon,
  isAlignRight = false,
}: {
  title: string
  description: string
  icon: ReactNode
  isAlignRight?: boolean
}) {
  const tranRes = useTranslation([title, description])
  return (
    <div
      className={`p-4 md:p-6 bg-white border border-white bg-opacity-5 rounded-2xl border-opacity-20 flex flex-col ${
        isAlignRight ? 'items-end' : ''
      }`}
    >
      {icon}
      <p className={`mt-4 text-xl md:text-2xl font-medium ${isAlignRight && 'text-right'}`}>
        {tranRes[0]}
      </p>
      <p className={`mt-4 text-sm md:text-base ${isAlignRight && 'text-right'}`}>{tranRes[1]}</p>
    </div>
  )
}

function WhyUs() {
  const tranRes = useTranslation([
    'Tại sao',
    'nên',
    'lựa chọn chúng tôi?',
    `Nền tảng tự động Pushtimize luôn được khách hàng công nhận và đánh giá cao với hệ thống
vận hành tối ưu và đem lại trải nghiệm tốt nhất cho khách hàng và người dùng.`,
  ])

  return (
    <div className="bg-black pt-[106px] pb-[123px]">
      <div className="px-4 mx-auto max-w-maxContent">
        <Line data-aos="fade-up" data-aos-duration="700" />
        <div className="flex flex-col items-start justify-between gap-4 py-8 md:gap-8 md:items-center md:flex-row">
          <Title className="!text-[28px] !md:text-[32px]">
            <span>{tranRes[0]}</span> {tranRes[1]} <br /> {tranRes[2]}
          </Title>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="max-w-[541px] text-sm md:text-base text-justify"
          >
            {tranRes[3]}
          </p>
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" />
        <div className="hidden grid-cols-4 gap-8 mt-8 md:grid">
          {solutions.slice(0, 3).map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
              className="flex"
            >
              <Item
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="hidden grid-cols-4 gap-8 mt-8 md:grid">
          <div />
          {solutions.slice(3, solutions.length).map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
              className="flex"
            >
              <Item
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8 md:hidden">
          {solutions.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
              className="flex"
            >
              <Item
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhyUs
