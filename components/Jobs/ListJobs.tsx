import { JobRes } from '@/backend/service/job-service/job-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import { getEndpoint, jobEndpoints } from '@/lib/endpoints'
import { Card, CardBody, Pagination } from '@nextui-org/react'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import Title from '../Title'
import SubmitCVModal from './SubmitCVModal'

function ListJobs() {
  const [page, setPage] = useState(1)
  const getList = useApiCall<CommonListResult<JobRes>, string>({
    callApi: () => axios.get(`${getEndpoint(jobEndpoints, 'getList')}?page=${page}&size=3`),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const { data } = getList

  const handleCallList = () => {
    getList.setLetCall(true)
  }

  useEffect(() => {
    handleCallList()
  }, [page])

  const listJobs = data?.result?.data || []

  const tranRes = useTranslation([
    'Việc làm mới nhất từ Adflex',
    'Bạn chưa tìm được công việc mong muốn? Chúng tôi luôn chào đón những tài năng mới, hãy gửi CV cho chúng tôi ngay.',
    'Nộp CV',
    'Vị trí',
    'Thông tin',
    'Số lượng',
    'Mức lương',
    'Hạn chót',
    'Chi tiết',
  ])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3565 gap-[66px] px-4 max-w-maxContent mx-auto text-black py-32">
      <div>
        <Title>{tranRes[0]}</Title>
        <p data-aos="fade-up" data-aos-duration="700" className="mt-10 text-xl">
          {tranRes[1]}
        </p>
        <div data-aos="fade-up" data-aos-duration="700">
          <SubmitCVModal>
            <PrimaryBtn className="mt-6 min-w-[160px]">{tranRes[2]}</PrimaryBtn>
          </SubmitCVModal>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-404020 text-xl text-[#667085]"
        >
          <p>{tranRes[3]}</p>
          <p>{tranRes[4]}</p>
          <div />
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-4" />
        <div className="flex flex-col">
          {listJobs.length > 0 &&
            listJobs.map((job, index) => (
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
                    <PrimaryBtn className="w-[160px] h-10">{tranRes[8]}</PrimaryBtn>
                  </Link>
                </div>
                <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
              </div>
            ))}
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <Card radius="none" className="mt-10">
            <CardBody>
              <Pagination
                radius="none"
                total={Math.floor((getList.data?.result.total || 0) / 3) + 1}
                page={page}
                onChange={(thisPage) => {
                  setPage(thisPage)
                }}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ListJobs
