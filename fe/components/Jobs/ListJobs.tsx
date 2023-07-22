import React from 'react'
import Title from '../Title'
import PrimaryBtn from '../PrimaryBtn'
import Line from '../Line'
import Link from 'next/link'
import SubmitCVModal from './SubmitCVModal'

const listJobs = [
  {
    id: 'job1',
    position: 'Graphic Designer',
    quantity: '01',
    salary: '10 – 16 triệu VND',
    date: '30/07/2023',
  },
  {
    id: 'job2',
    position: 'Graphic Designer',
    quantity: '01',
    salary: '10 – 16 triệu VND',
    date: '30/07/2023',
  },
  {
    id: 'job3',
    position: 'Graphic Designer',
    quantity: '01',
    salary: '10 – 16 triệu VND',
    date: '30/07/2023',
  },
  {
    id: 'job4',
    position: 'Graphic Designer',
    quantity: '01',
    salary: '10 – 16 triệu VND',
    date: '30/07/2023',
  },
]

function ListJobs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3565 gap-[66px] px-4 max-w-maxContent mx-auto text-black py-32">
      <div>
        <Title>Việc làm mới nhất từ Adflex</Title>
        <p data-aos="fade-up" data-aos-duration="700" className="mt-10 text-xl">
          Bạn chưa tìm được công việc mong muốn? Chúng tôi luôn chào đón những tài năng mới, hãy gửi
          CV cho chúng tôi ngay.
        </p>
        <div data-aos="fade-up" data-aos-duration="700">
          <SubmitCVModal>
            <PrimaryBtn className="mt-6 min-w-[160px]">Nộp CV</PrimaryBtn>
          </SubmitCVModal>
        </div>
      </div>
      <div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="hidden md:grid grid-cols-1 gap-8 md:grid-cols-404020 text-xl text-[#667085]"
        >
          <p>Vị trí</p>
          <p>Thông tin</p>
          <div />
        </div>
        <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-4" />
        <div className="flex flex-col">
          {listJobs.map((job, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              key={job.id}
              data-aos-delay={300 + 100 * index}
              className="flex flex-col pt-10"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-404020">
                <p className="font-medium">{job.position}</p>
                <div>
                  <p>
                    Số lượng: <span className="font-semibold">{job.quantity}</span>
                  </p>
                  <p>
                    Mức lương: <span className="font-semibold">{job.salary}</span>
                  </p>
                  <p>
                    Hạn chót: <span className="font-semibold">{job.date}</span>
                  </p>
                </div>
                <Link href="/jobs/1">
                  <a>
                    <PrimaryBtn className="w-[160px] h-10">Chi tiết</PrimaryBtn>
                  </a>
                </Link>
              </div>
              <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
            </div>
          ))}
        </div>
        <button
          style={{
            backgroundImage: 'url(/images/mainnav-btn-bg.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
          }}
          className="py-[10px] px-10 outline-none mt-6"
          type="button"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="flex items-center gap-2">
            <p>Xem thêm</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ListJobs
