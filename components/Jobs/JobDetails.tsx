import { JobRes } from '@/backend/service/job-service/job-res'
import { useApiCall } from '@/hooks/useCallApi'
import useTranslation from '@/hooks/useTranslation'
import { getEndpoint, jobEndpoints } from '@/lib/endpoints'
import { Card, CardBody, Pagination } from '@nextui-org/react'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Line from '../Line'
import PrimaryBtn from '../PrimaryBtn'
import DateIcon from '../icons/Jobs/DateIcon'
import PersonIcon from '../icons/Jobs/PersonIcon'
import SalaryIcon from '../icons/Jobs/SalaryIcon'
import SubmitCVModal from './SubmitCVModal'

function Item({ icon, title, content }: { icon: ReactNode; title: string; content: string }) {
  return (
    <div className="flex flex-col gap-1">
      {icon}
      <p>{title}</p>
      <p className="font-semibold">{content}</p>
    </div>
  )
}

function Icon({ ...props }) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M16 0H0v16h9.313L16 9.313V0z" fill="#DD1000" />
    </svg>
  )
}

function AddressItem({
  title,
  content,
  className = '',
}: {
  title: string
  content: string | ReactNode
  className?: string
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      className={`${className} flex items-start gap-12`}
    >
      <div className="flex items-center gap-2 min-w-[80px] md:min-w-[90px] mt-0 md:mt-3">
        <Icon />
        <p className="font-medium whitespace-nowrap">{title}</p>
      </div>
      <div className="text-base md:text-[24px] underline underline-offset-4">{content}</div>
    </div>
  )
}

function JobDetails() {
  const router = useRouter()

  const getDetail = useApiCall<CommonListResult<JobRes>, string>({
    callApi: () =>
      axios.get(
        `${getEndpoint(jobEndpoints, 'getList')}?page=1&size=1&title=${router.query.jobId}`
      ),
    handleError(status, message) {
      toast.error(message)
    },
  })

  useEffect(() => {
    if (router.query.jobId) {
      getDetail.setLetCall(true)
    }
  }, [router])

  const detail = getDetail?.data?.result?.data[0] || new JobRes()

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
    'Tuyển dụng',
    'Số lượng',
    'Mức lương',
    'Hạn chót',
    'Nộp CV',
    'Thông tin liên hệ',
    'Việc làm bạn có thể quan tâm',
    'Chi tiết',
  ])

  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        style={{
          backgroundImage: 'url(/images/cpa/cpa-hero-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="h-auto px-4 pt-56 pb-32 text-center"
      >
        <p className="text-lg md:text-2xl">{tranRes[0]}</p>
        <p className="mt-2 text-[30px] md:text-5xl">{detail.title}</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="max-w-[918px] px-4 mx-auto text-black py-32"
      >
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
          <Item icon={<PersonIcon />} title={`${tranRes[1]}:`} content={String(detail.quantity)} />
          <Item icon={<SalaryIcon />} title={`${tranRes[2]}:`} content={detail.salary} />
          <Item icon={<DateIcon />} title={`${tranRes[3]}:`} content={detail.deadline} />
          <div className="col-span-3 md:col-auto">
            <SubmitCVModal>
              <PrimaryBtn className="w-48">{tranRes[4]}</PrimaryBtn>
            </SubmitCVModal>
          </div>
        </div>
        <Line className="bg-[#D0D5DD] my-12" />
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="pl-4 mt-4 text-sm list-disc md:text-base"
        >
          <div
            className="text-justify blog-detail-style"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          />
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px]">
            {tranRes[5]}
          </p>
          <AddressItem title="Email" content="info@adflex.vn" />
          <AddressItem title="Hotline" content="0345 036 008" />
          <AddressItem
            title="Địa chỉ"
            content={
              <div className="flex flex-col gap-3">
                <p>
                  Hà Nội: Tầng 2, Toà nhà Ecolife Capitol 58 Tố Hữu, Mễ Trì, Nam Từ Liêm, Hà Nội
                </p>
                <p> HCM: 99 Nguyễn Thị Minh Khai, Quận 1, Tp. HCM </p>
                SINGAPORE: 470 North Bridge
                <p>Road, #05 -12 Bugis Cube, Singapore</p>
              </div>
            }
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <PrimaryBtn className="w-[196px] mt-16">{tranRes[5]}</PrimaryBtn>
        </div>

        <div className="mt-40">
          <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px]">
            {tranRes[6]}
          </p>

          <div className="flex flex-col">
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
                      {tranRes[1]}: <span className="font-semibold">{job.quantity}</span>
                    </p>
                    <p>
                      {tranRes[2]}: <span className="font-semibold">{job.salary}</span>
                    </p>
                    <p>
                      {tranRes[3]}: <span className="font-semibold">{job.deadline}</span>
                    </p>
                  </div>
                  <PrimaryBtn className="w-[160px] h-10">tranRes[7]</PrimaryBtn>
                </div>
                <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="700">
          <Card radius="none" className="mt-10">
            <CardBody>
              <Pagination
                radius="none"
                total={(getList.data?.result.total || 0) / 3 + 1}
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

export default JobDetails
