import React, { ReactNode } from 'react'
import DollarIcon from '../icons/Opsrun/DollarIcon'
import PhoneIcon from '../icons/Opsrun/PhoneIcon'
import ShieldIcon from '../icons/Opsrun/ShieldIcon'
import Line from '../Line'
import Title from '../Title'

const solutions = [
  {
    id: 'sol-1',
    title: 'Chính sách giá ưu đãi',
    description:
      'Opsrun mang đến chính sách giá tốt nhất với vai trò là nhà phân phối chính thức của các nhà cung cấp hàng đầu thế giới (AWS, Google Cloud, Huawei,...)',
    icon: <DollarIcon />,
  },
  {
    id: 'sol-2',
    title: 'Hỗ trợ 24/7 bởi chuyên gia',
    description:
      'Thay vì phải gửi yêu cầu hỗ trợ không biết ngày hồi đáp, chuyên gia Opsrun giúp bạn giải quyết mọi vấn đề về vận hành & khắc phục sự cố 1:1 - 24/7 để đảm bảo hệ thống luôn trơn chu.',
    icon: <PhoneIcon />,
  },
  {
    id: 'sol-3',
    title: 'Bảo mật tuyệt đối',
    description:
      'Đảm bảo tính toàn vẹn, bảo mật và riêng tư của dữ liệu khi nó được truyền từ hệ thống thông tin cục bộ lên cloud server.',
    icon: <ShieldIcon />,
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
  return (
    <div
      className={`p-4 bg-white border border-white bg-opacity-5 rounded-2xl border-opacity-20 flex flex-col ${
        isAlignRight ? 'items-end' : ''
      }`}
    >
      {icon}
      <p className={`mt-4 text-[21px] font-medium ${isAlignRight && 'text-right'}`}>{title}</p>
      <p className={`mt-4 ${isAlignRight && 'text-right'}`}>{description}</p>
    </div>
  )
}

function Whyus() {
  return (
    <div className="bg-[#262626] py-28">
      <div className="px-4 mx-auto max-w-maxContent">
        <Line data-aos="fade-up" data-aos-duration="700" />
        <div className="grid grid-cols-1 gap-8 my-8 md:grid-cols-4">
          <div>
            <Title className="!text-[28px] !md:text-[32px]">
              <span>Tại sao</span> nên <br className="block md:hidden" /> lựa chọn chúng tôi?
            </Title>
          </div>
          {solutions.map((i, index) => (
            <div
              key={`opsrun-sol-${index}`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
              className="flex"
            >
              <Item
                key={i.id}
                title={i.title}
                description={i.description}
                icon={i.icon}
                isAlignRight
              />
            </div>
          ))}
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={300}
            className="p-6 border-b border-white border-dashed md:border-b-0 md:border-r border-opacity-20"
          >
            <p className="font-bold text-[40px] md:text-[56px] leading-none">$100K+</p>
            <Line className="max-w-[120px] my-4" />
            <p className="text-base md:text-xl">
              Tổng chi phí Opsrun tiết kiệm mỗi năm cho khách hàng
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={500}
            className="p-6 border-b border-white border-dashed md:border-b-0 md:border-r das border-opacity-20"
          >
            <p className="font-bold text-[40px] md:text-[56px] leading-none">70%</p>
            <Line className="max-w-[120px] my-4" />
            <p className="text-base md:text-xl">Khách hàng tái sử dụng dịch vụ</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={700} className="p-6">
            <p className="font-bold text-[40px] md:text-[56px] leading-none">98%</p>
            <Line className="max-w-[120px] my-4" />
            <p className="text-base md:text-xl">Khách hàng hài lòng</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus
