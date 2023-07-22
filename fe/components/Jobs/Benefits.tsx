import React, { ReactNode } from 'react'
import Title from '../Title'
import Line from '../Line'
import WorkEnvIcon from '../icons/Jobs/WorkEnvIcon'
import TrophyIcon from '../icons/Jobs/TrophyIcon'
import ChartIcon from '../icons/Jobs/ChartIcon'
import UptrendIcon from '../icons/Pushtimize/UptrendIcon'

const benefits = [
  {
    id: 'work-environment',
    title: 'Môi trường làm việc hấp dẫn',
    description: 'Đồng nghiệp, sếp và cả khách hàng của chúng tôi đều tuyệt vời.',
    icon: <WorkEnvIcon />,
  },
  {
    id: 'salary',
    title: 'Đãi ngộ hấp dẫn',
    description:
      'Chúng tôi luôn quan tâm đến cuộc sống của nhân viên và luôn nỗ lực để đem đến những gì tốt nhất cho team.',
    icon: <TrophyIcon />,
  },
  {
    id: 'talent',
    title: 'Phát triển tài năng của bạn',
    description:
      'Tài năng tại Adflex luôn được coi trọng, chúng tôi mong muốn năng lực của mỗi cá nhân sẽ được phát huy tốt nhất, đem đến cơ hội cho tất cả mọi người.',
    icon: <ChartIcon />,
  },
  {
    id: 'Future',
    title: 'Kiến tạo tương lai',
    description:
      'Chúng tôi không dự đoán tương lai - chúng tôi tạo ra nó. Hãy cùng nhau tạo ra những điều tuyệt vời tại Adflex!',
    icon: <UptrendIcon />,
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
      className={`p-4 md:p-6 bg-white border border-white bg-opacity-5 rounded-2xl border-opacity-20 flex flex-col ${
        isAlignRight ? 'items-end' : ''
      }`}
    >
      {icon}
      <p className={`mt-4 text-xl md:text-2xl font-medium ${isAlignRight && 'text-right'}`}>
        {title}
      </p>
      <p className={`text-sm md:text-base mt-4 ${isAlignRight && 'text-right'}`}>{description}</p>
    </div>
  )
}

function Benefits() {
  return (
    <div className="bg-[#262626] px-4 pt-56 pb-28 -mt-[115px]">
      <Title className="text-center">Nơi làm việc tuyệt vời nhất!</Title>
      <Line
        data-aos="fade-up"
        data-aos-duration="700"
        className="mx-auto mt-8 md:mt-14 max-w-maxContent"
      />
      <div className="grid grid-cols-2 gap-4 mx-auto mt-8 md:mt-14 md:grid-cols-4 md:gap-8 max-w-maxContent">
        {benefits.map((benefit, index) => (
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={300 + 100 * index}
            className="flex"
          >
            <Item
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          </div>
        ))}
      </div>
      <Line
        data-aos="fade-up"
        data-aos-duration="700"
        className="mx-auto mt-8 md:mt-14 max-w-maxContent"
      />
    </div>
  )
}

export default Benefits
