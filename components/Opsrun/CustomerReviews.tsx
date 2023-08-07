import BackBtn from '../icons/BackBtn'
import Nextbtn from '../icons/Nextbtn'
import StarFeedBackIcon from '../icons/StarFeedBackIcon'

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
      </div>
    </div>
  )
}

export default CustomerReviews
