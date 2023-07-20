import React from 'react'
import Title from '../Title'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'

const effectives = [
  {
    id: 'contentment',
    percent: '98%',
    description: 'Tỉ lệ khách hàng hài lòng',
  },
  {
    id: 'expense',
    percent: '30%',
    description: 'Tỉ lệ chi phí tiết kiệm',
  },
  {
    id: 'Optimal',
    percent: '25%',
    description: 'Tỉ lệ tối ưu hiệu quả quảng cáo',
  },
  {
    id: 'kpi',
    percent: '100%',
    description: 'Tỉ lệ hoàn thành KPI',
  },
]

function Effective() {
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
            <span>Hiệu quả AdFlex</span> <br />
            mang lại cho khách hàng
          </Title>
          <p className="max-w-[435px] text-justify">
            Với khả năng làm việc chuyên nghiệp cùng công nghệ vượt trội cho phép AdFlex giải quyết
            mọi vấn đề khó khăn nhất trong quá trình chinh phục KPI tiếp cận khách hàng cũng như
            quản trị doanh nghiệp của đối tác trên mọi lĩnh vực
          </p>
        </div>
        <div className="relative z-10 grid grid-cols-2 gap-4 mt-16 md:gap-8 md:grid-cols-4">
          {effectives.map((item) => (
            <div
              key={item.id}
              className="py-4 md:py-6 bg-white rounded-2xl smooth-transform bg-opacity-5 hover:bg-opacity-25 effective-item h-[250px] md:h-[360px] flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <p className="px-4 text-5xl font-bold md:px-6 md:text-7xl">{item.percent}</p>
                <Line className="my-4" />
                <p className="px-4 text-xl md:px-6">{item.description}</p>
              </div>
              <div className="px-4 md:px-6 effective-btn">
                <PrimaryBtn className="w-full mt-4 md:mt-8">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-white">Brief us</p>
                    <UpRightArrow />
                  </div>
                </PrimaryBtn>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Effective
