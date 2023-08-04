import useTranslation from '@/hooks/useTranslation'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'

function Hero() {
  const tranRes = useTranslation([
    'Giải pháp thiết kế, triển khai, vận hành',
    'hệ thống công nghệ thông tin trên',
    'nền tảng cloud server',
    'Hỗ trợ doanh nghiệp trong quá trình chuyển đổi số.',
    'Bắt đầu',
  ])

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/opsrun/opsrun-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="h-auto pb-40 overflow-hidden pt-72"
    >
      <div className="grid items-start h-full grid-cols-1 px-4 mx-auto md:grid-cols-64 max-w-maxContent">
        <div className="flex flex-col justify-center h-full">
          <img className="w-[186px] md:w-[334px]" src="/images/opsrun-icon.png" alt="cpa" />
          <p className="mt-5 !text-[28px] !md:text-[32px]">
            {tranRes[0]} <br className="hidden md:block" /> {tranRes[1]} <br /> {tranRes[2]}
          </p>
          <p className="mt-5 text-sm md:text-base">{tranRes[3]}</p>
          <div className="flex gap-2 mt-5">
            <BriefUsModal>
              <SecondaryBtn>{tranRes[4]}</SecondaryBtn>
            </BriefUsModal>
          </div>
        </div>
        <div className="">
          <div className="static md:absolute -top-16 right-28 w-auto md:w-[900px] pt-24">
            <img
              src="/images/opsrun/opsrun-hero-img.png"
              alt="img"
              className="w-full mix-blend-screen"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
