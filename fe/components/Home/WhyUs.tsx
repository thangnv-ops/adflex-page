import React, { ReactNode } from 'react'
import Title from '../Title'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'
import CPUIcon from '../icons/CPUIcon'
import StarIcon from '../icons/StarIcon'
import PersonIcon from '../icons/PersonIcon'
import TrophyIcon from '../icons/TrophyIcon'
import CpuWithBgIcon from '../icons/CpuWithBgIcon'
import PersonWithBgIcon from '../icons/PersonWithBgIcon'
import StarWithBgIcon from '../icons/StarWithBgIcon'
import TrophyWithBgIcon from '../icons/TrophyWithBgIcon'
import BriefUsModal from '../BriefUsModal'

const ICON_ID = {
  CPU: 'cpu',
  PERSON: 'person',
  STAR: 'star',
  TROPHY: 'trophy',
}

function Item({
  title,
  content,
  iconRight,
  iconLeft,
  focusId,
  className = '',
}: {
  title: string
  content: string
  focusId: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
}) {
  const handleMouseEnter = () => {
    const target = document.getElementById(focusId)
    if (target) {
      target.style.filter = 'grayscale(0)'
      target.style.scale = '1.2'
    }
  }

  const handleMouseLeave = () => {
    const target = document.getElementById(focusId)
    if (target) {
      target.style.filter = 'grayscale(0.4)'
      target.style.scale = '1'
    }
  }
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-start bg-black bg-opacity-5 md:bg-transparent  gap-6 p-6 smooth-transform border border-black border-opacity-20 md:border-opacity-100 border-transparent hover:border-[#D0D5DD] rounded-2xl ${className}`}
    >
      {iconLeft && <div className="w-10 md:w-14">{iconLeft}</div>}
      <div className="max-w-[246px] md:max-w-none">
        <p className="text-xl md:text-2xl text-primary whitespace-nowrap">{title}</p>
        <p className="mt-4 text-sm text-justify md:text-base">{content}</p>
      </div>
      {iconRight && <div className="w-10 md:w-14">{iconRight}</div>}
    </div>
  )
}

function WhyUs() {
  const { CPU, PERSON, STAR, TROPHY } = ICON_ID
  return (
    <div className="max-w-maxContent mx-auto px-4 py-[120px] text-black">
      <div className="flex flex-col items-start justify-between md:items-center md:flex-row">
        <Title>
          <span>Tại sao</span> lựa chọn chúng tôi?
        </Title>
        <BriefUsModal>
          <div data-aos="fade-up" data-aos-duration="700">
            <PrimaryBtn className="mt-2 md:mt-8">
              <div className="flex items-center gap-2">
                <p className="text-white">Brief us</p>
                <UpRightArrow />
              </div>
            </PrimaryBtn>
          </div>
        </BriefUsModal>
      </div>
      <div className="grid justify-center grid-cols-1 mt-16 md:grid-cols-343">
        <div className="flex-col hidden md:flex justify-evenly">
          <Item
            title="Công nghệ vượt trội"
            content="Tối ưu hóa chiến dịch, khai thác khách hàng mục tiêu thông qua nền tảng công nghệ vượt trội."
            iconRight={<CPUIcon />}
            focusId={CPU}
          />
          <Item
            title="Tập trung vào chất lượng"
            content="Tập trung vào chất lượng giải pháp nhằm đáp ứng được hoàn toàn KPI của toàn chiến dịch, mang lại hiệu quả kinh doanh cho đối tác"
            iconRight={<StarIcon />}
            focusId={STAR}
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="700" className="relative">
          <img src="/images/whyus-img.png" alt="whyus" />
          <CpuWithBgIcon className="smooth-transform grayscale-[0.4] w-12 md:w-16 absolute top-[70px] left-[70px] md:top-[98px] md:left-[98px]" />
          <PersonWithBgIcon className="smooth-transform grayscale-[0.4] w-12 md:w-16 absolute top-[70px] right-[85px] md:top-[98px] md:right-[110px]" />
          <StarWithBgIcon className="smooth-transform grayscale-[0.4] w-12 md:w-16 absolute bottom-[145px] left-[70px] md:bottom-[198px]  md:left-[98px]" />
          <TrophyWithBgIcon className="smooth-transform grayscale-[0.4] w-12 md:w-16 absolute bottom-[145px] right-[85px] md:bottom-[198px]  md:right-[110px]" />
        </div>

        <div className="flex-col hidden md:flex justify-evenly">
          <Item
            title="Cá nhân hóa giải pháp"
            content="Giải pháp được cá nhân hóa theo nhu cầu của từng khách hàng. Dashboard báo cáo tối ưu theo từng đối tượng."
            iconLeft={<PersonIcon />}
            focusId={PERSON}
          />
          <Item
            title="Chuyên gia giàu kinh nghiệm"
            content="Đội ngũ chuyên gia dày kinh nghiệm giúp đưa ra các giải pháp tối ưu, tư vấn khách hàng cách thức và kỹ thuật tốt nhất."
            iconLeft={<TrophyIcon />}
            focusId={TROPHY}
          />
        </div>
      </div>
      <div className="flex flex-col w-full gap-4 md:hidden">
        <Item
          title="Công nghệ vượt trội"
          content="Tối ưu hóa chiến dịch, khai thác khách hàng mục tiêu thông qua nền tảng công nghệ vượt trội."
          iconRight={<CpuWithBgIcon className="w-10 h-10 md:w-14 md:h-14" />}
          focusId={CPU}
        />
        <Item
          title="Tập trung vào chất lượng"
          content="Tập trung vào chất lượng giải pháp nhằm đáp ứng được hoàn toàn KPI của toàn chiến dịch, mang lại hiệu quả kinh doanh cho đối tác"
          iconRight={<StarWithBgIcon className="w-10 h-10 md:w-14 md:h-14" />}
          focusId={STAR}
        />
        <Item
          title="Cá nhân hóa giải pháp"
          content="Giải pháp được cá nhân hóa theo nhu cầu của từng khách hàng. Dashboard báo cáo tối ưu theo từng đối tượng."
          iconRight={<PersonWithBgIcon className="w-10 h-10 md:w-14 md:h-14" />}
          focusId={PERSON}
        />
        <Item
          title="Chuyên gia giàu kinh nghiệm"
          content="Đội ngũ chuyên gia dày kinh nghiệm giúp đưa ra các giải pháp tối ưu, tư vấn khách hàng cách thức và kỹ thuật tốt nhất."
          iconRight={<TrophyWithBgIcon className="w-10 h-10 md:w-14 md:h-14" />}
          focusId={TROPHY}
        />
      </div>
    </div>
  )
}

export default WhyUs
