import Line from '../Line'
import QuaternaryBtn from '../QuaternaryBtn'
import SecondaryBtn from '../SecondaryBtn'
import Title from '../Title'
import BackBtn from '../icons/BackBtn'
import Nextbtn from '../icons/Nextbtn'
import StarFeedBackIcon from '../icons/StarFeedBackIcon'

const effectives = [
  {
    id: 'Converation',
    percent: '999K',
    description: 'Converation',
  },
  {
    id: 'feedback-ok',
    percent: '98%',
    description: 'Tỉ lệ khách hàng hài lòng',
  },
  {
    id: 'user',
    percent: '100K+',
    description: 'Người dùng',
  },
  {
    id: 'country',
    percent: '10+',
    description: 'Quốc gia',
  },
]

function CustomerReviews() {
  return (
    <div className="bg-[#0F0F0F] pt-24 pb-32">
      <div className="px-4 mx-auto max-w-maxContent">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-64">
          <div className="flex justify-center">
            {/* <img src="/images/cpa/feedback-img.png" alt="feedback" /> */}
          </div>
          <div>
            <div className="flex gap-2">
              <StarFeedBackIcon />
              <StarFeedBackIcon />
              <StarFeedBackIcon />
              <StarFeedBackIcon />
              <StarFeedBackIcon />
            </div>
            <p className="mt-6 text-2xl md:text-[32px]">
              Investment solution is the most valuable business resource we have EVER purchased.
              Investment solution is the next killer app.
            </p>
            <div className="flex flex-col items-start justify-between gap-4 mt-12 md:items-center md:flex-row">
              <div className="flex gap-4">
                {/* <img
                  src="/images/cpa/customer-ava.png"
                  alt="avatar"
                  className="rounded-full w-14 h-1/4"
                /> */}
                <div>
                  <p className="text-xl">Katherine Moss</p>
                  <p className="text-[#667085] text-sm">Project Manager, Layers</p>
                </div>
              </div>
              <div className="flex gap-2">
                <BackBtn />
                <Nextbtn />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-28">
          <Title className="max-w-[909px]">
            <span>10.000+</span> đối tác đã tin tưởng lựa chọn và hài lòng với giải pháp G1 CPA của
            AdFlex.
          </Title>
          <div className="grid grid-cols-2 gap-4 mt-12 md:gap-8 md:grid-cols-4">
            {effectives.map((item) => (
              <div
                key={item.id}
                className="py-4 md:py-6 bg-white rounded-2xl smooth-transform bg-opacity-5 hover:bg-opacity-25 effective-item h-[250px] md:h-[360px] flex flex-col justify-between backdrop-blur-xl"
              >
                <div>
                  <p className="px-4 md:px-6 font-bold text-[48px] md:text-7xl">{item.percent}</p>
                  <Line className="my-4" />
                  <p className="px-4 text-base md:text-xl md:px-6">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-8 mt-12 md:flex-row">
            <p className="max-w-[656px]">
              Còn bạn, hãy cho AdFlex cơ hội được kết nối và hợp tác thúc đẩy KPI quảng cáo của
              doanh nghiệp bạn nhé.
            </p>
            <div className="flex gap-2">
              <QuaternaryBtn className="px-5">
                <span className="text-sm md:text-base">Đăng ký nhận brochure</span>
              </QuaternaryBtn>
              <SecondaryBtn className="px-5">
                <span className="text-sm md:text-base">Liên hệ tư vấn</span>
              </SecondaryBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
