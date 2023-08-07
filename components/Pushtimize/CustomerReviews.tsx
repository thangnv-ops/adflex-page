import Line from '../Line'
import BackBtnBlack from '../icons/BackBtnBlack'
import NextBtnBlack from '../icons/NextBtnBlack'
import StarFeedBackIcon from '../icons/StarFeedBackIcon'

const effectives = [
  {
    id: 'Converation',
    percent: '20M+',
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
]

function CustomerReviews() {
  return (
    <div className="pt-24 pb-10 text-black md:pb-32">
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
            <p className="mt-6 text-[32px]">
              Investment solution is the most valuable business resource we have EVER purchased.
              Investment solution is the next killer app.
            </p>
            <div className="flex items-center justify-between mt-12">
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
                <BackBtnBlack />
                <NextBtnBlack />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: 'url(/images/pushtimize/parameter-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto mt-24 md:grid-cols-3 max-w-maxContent">
          {effectives.map((i, index) => (
            <div
              key={`effectives-${index}`}
              className="text-black bg-white border border-black rounded-2xl border-opacity-20"
            >
              <p className="px-6 pt-6 font-bold text-[48px] md:text-7xl">{i.percent}</p>
              <Line className="bg-opacity-20" />
              <p className="px-6 pb-6 mt-4 text-base md:text-xl">{i.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
