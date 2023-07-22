import React, { ReactNode } from 'react'
import PersonIcon from '../icons/Jobs/PersonIcon'
import SalaryIcon from '../icons/Jobs/SalaryIcon'
import DateIcon from '../icons/Jobs/DateIcon'
import PrimaryBtn from '../PrimaryBtn'
import Line from '../Line'
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

function JobDetails() {
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
        <p className="text-lg md:text-2xl">Tuyển dụng</p>
        <p className="mt-2 text-[30px] md:text-5xl">Graphic Designer</p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        className="max-w-[918px] px-4 mx-auto text-black py-32"
      >
        <div className="grid grid-cols-3 gap-4 md:grid-cols-4">
          <Item icon={<PersonIcon />} title="Số lượng:" content="01" />
          <Item icon={<SalaryIcon />} title="Mức lương:" content="10 – 16 triệu VND" />
          <Item icon={<DateIcon />} title="Hạn chót:" content="30/07/2023" />
          <div className="col-span-3 md:col-auto">
            <SubmitCVModal>
              <PrimaryBtn className="w-48">Nộp CV</PrimaryBtn>
            </SubmitCVModal>
          </div>
        </div>
        <Line className="bg-[#D0D5DD] my-12" />
        <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px]">
          Nhiệm vụ chính
        </p>
        <ul
          data-aos="fade-up"
          data-aos-duration="700"
          className="pl-4 mt-4 text-sm list-disc md:text-base"
        >
          <li>
            Xây dựng kế hoạch thanh tra, tổ chức thực hiện kế hoạch kiểm tra định kỳ và đột xuất
            theo yêu cầu của Ban Lãnh Đạo Công ty
          </li>
          <li>
            Thực hiện công tác thanh tra và kiểm tra định kỳ, đột xuất về tính tuân thủ quy chế, quy
            định, quy trình của Công ty
          </li>
          <li>Báo cáo kết quả thanh tra, kiểm tra cho Ban Giám đốc</li>
          <li>
            Thanh tra hậu kiểm hoạt động vận hành và quy trình của Công ty và các Phòng Ban theo
            chức năng nhiệm vụ đảm bảo tuân thủ quy định của pháp luật và quy chế, quy định của Công
            ty
          </li>
          <li>
            Xây dựng hệ thống tuân thủ và quản trị rủi ro toàn Công ty. Thường xuyên cập nhật, chỉnh
            sửa theo nhu cầu hoạt động kinh doanh hoặc yêu cầu của các bộ phận/phòng ban trong Công
            ty.
          </li>
        </ul>

        <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px] mt-12">
          Yêu cầu ứng viên
        </p>
        <ul
          data-aos="fade-up"
          data-aos-duration="700"
          className="pl-4 mt-4 text-sm list-disc md:text-base"
        >
          <li>
            Có 3 năm kinh nghiệm làm việc tại các văn phòng luật /công ty tư vấn pháp lý chuyên về
            mảng đầu tư nước ngoài, doanh nghiệp, sở hữu trí tuệ, bản quyền, xin cấp giấy phép con,
            xử lý tranh chấp dân sự tại tòa án…
          </li>
          <li>Trình độ đào tạo: Tốt nghiệp Đại học chuyên ngành Luật</li>
          <li>Ưu tiên ứng viên khả năng tiếng Anh liên quan đến pháp lý</li>
          <li>
            Thanh tra hậu kiểm hoạt động vận hành và quy trình của Công ty và các Phòng Ban theo
            chức năng nhiệm vụ đảm bảo tuân thủ quy định của pháp luật và quy chế, quy định của Công
            ty
          </li>
        </ul>

        <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px] mt-12">
          Quyền lợi được hưởng
        </p>
        <ul
          data-aos="fade-up"
          data-aos-duration="700"
          className="pl-4 mt-4 text-sm list-disc md:text-base"
        >
          <li>
            Mức lương khởi điểm hấp dẫn, cạnh tranh, tương xứng với khả năng và kinh nghiệm làm
            việc.
          </li>
          <li>
            Thưởng KPI, Thưởng dự án, Thưởng hiệu quả công việc, thưởng doanh thu cuối năm tháng 13{' '}
          </li>
          <li>Xét tăng lương 2 lần/năm theo năng lực và hiệu quả công việc </li>
          <li>Được hưởng BHXH, BHYT, BHTN theo chế độ nhà nước ban hành</li>
        </ul>

        <div className="flex flex-col gap-6 mt-12">
          <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px]">
            Thông tin liên hệ
          </p>
          <AddressItem title="Email" content="info@adflex.vn" />
          <AddressItem title="Hotline" content="+84 987 654 321" />
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
          <PrimaryBtn className="w-[196px] mt-16">Nộp CV</PrimaryBtn>
        </div>

        <div className="mt-40">
          <p data-aos="fade-up" data-aos-duration="700" className="text-2xl md:text-[30px]">
            Việc làm bạn có thể quan tâm
          </p>

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
                  <PrimaryBtn className="w-[160px] h-10">Chi tiết</PrimaryBtn>
                </div>
                <Line data-aos="fade-up" data-aos-duration="700" className="bg-[#D0D5DD] mt-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails
