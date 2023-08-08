import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import BriefUsModal from '../BriefUsModal'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import Title from '../Title'
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

  const contentEffective = useGetContent({
    componentName: `${Effective.name}-Content`,
    defaultValue: [...effectives.map((item) => item.description)],
  })

  const transEffRes = useTranslation(contentEffective)

  const afterTrans = effectives.map((item, index) => {
    return { ...item, description: transEffRes[index] }
  })

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
          {afterTrans.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={300 + 100 * index}
              key={item.id}
              className="py-4 md:py-6 bg-white rounded-2xl smooth-transform bg-opacity-5 hover:bg-opacity-25 effective-item h-[233px] md:h-[312px] flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <p className="px-4 text-[40px] font-bold md:px-6 md:text-[56px]">{item.percent}</p>
                <Line className="my-4" />
                <p className="px-4 text-base md:text-xl md:px-6">{item.description}</p>
              </div>
              <div className="px-4 md:px-6 effective-btn">
                <BriefUsModal>
                  <PrimaryBtn className="w-full mt-4 md:mt-8">
                    <div className="flex items-center justify-center gap-2">
                      <p className="text-white">Brief us</p>
                      <UpRightArrow />
                    </div>
                  </PrimaryBtn>
                </BriefUsModal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Effective
