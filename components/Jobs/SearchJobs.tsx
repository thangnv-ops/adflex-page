import { JobRes } from '@/backend/service/job-service/job-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import { getEndpoint, jobEndpoints } from '@/lib/endpoints'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import SearchIcon from '../icons/SearchIcon'

function SearchJobs() {
  const tranRes = useTranslation([
    'Cơ hội việc làm tại Adflex',
    'Tìm kiếm',
    'Tìm kiếm việc làm',
    'Chi tiết',
  ])

  const [title, setTitle] = useState('')

  const getList = useApiCall<CommonListResult<JobRes>, string>({
    callApi: () =>
      axios.get(`${getEndpoint(jobEndpoints, 'getList')}?page=1&size=3&title=${title}`),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const { data } = getList

  const handleCallList = () => {
    getList.setLetCall(true)
  }

  useEffect(() => {
    if (title.length > 0) {
      handleCallList()
    }
  }, [title])

  let listJobs = []

  if (title?.length > 0) {
    listJobs = data?.result?.data || []
  } else {
    listJobs = []
  }

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10 "
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">{tranRes[0]}</p>
        <div className="max-w-[720px] w-full mx-auto grid grid-cols-1 md:grid-cols-73 items-center gap-2">
          <div className="h-content w-content relative">
            <PrimaryInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={tranRes[2]}
              className="max-w-[496px] w-full relative text-black"
            />
          </div>
          <PrimaryBtn className="flex justify-center w-full">
            <div className="flex items-center gap-2">
              <SearchIcon />
              <p className="">{tranRes[1]}</p>
            </div>
          </PrimaryBtn>
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
        {listJobs.length > 0 && (
          <div className="flex flex-col text-black w-full">
            {listJobs.map((job, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration="700"
                key={job._id}
                data-aos-delay={300 + 100 * index}
                className="flex flex-col pt-10"
              >
                <div className="grid grid-cols-1 gap-8 md:grid-cols-404020">
                  <p className="font-medium">{job.title}</p>
                  <div>
                    <p>
                      {tranRes[5]}: <span className="font-semibold">{job.quantity}</span>
                    </p>
                    <p>
                      {tranRes[6]}: <span className="font-semibold">{job.salary}</span>
                    </p>
                    <p>
                      {tranRes[7]}: <span className="font-semibold">{job.deadline}</span>
                    </p>
                  </div>
                  <Link href={`/jobs/${job.title}`}>
                    <PrimaryBtn className="w-[160px] h-10">{tranRes[3]}</PrimaryBtn>
                  </Link>
                </div>
                <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchJobs
