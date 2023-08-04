import useTranslation from '@/hooks/useTranslation'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'
import Title from '../Title'
import EffectiveIcon from '../icons/EffectiveIcon'
import LikeIcon from '../icons/LikeIcon'
import QualityIcon from '../icons/QualityIcon'
import RenewIcon from '../icons/RenewIcon'

function Whyus() {
  const tranRes = useTranslation([
    'Lý do nên lựa chọn chúng tôi',
    'Đăng ký ngay',
    'Đổi mới',
    'Chuyên nghiệp',
    'Chất lượng',
    'Hiệu quả',
  ])

  return (
    <div
      style={{
        backgroundImage: 'url(/images/cpa/whyus-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="px-4 py-20 mx-auto max-w-maxContent">
        <div className="flex items-center justify-between">
          <div>
            <Title className="!text-[28px] !md:text-[32px]">{tranRes[0]}</Title>
            <div data-aos="fade-up" data-aos-duration="700">
              <BriefUsModal>
                <SecondaryBtn className="mt-8">{tranRes[1]}</SecondaryBtn>
              </BriefUsModal>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            style={{
              backgroundImage: 'url(/images/cpa/renew-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="hidden md:flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <RenewIcon />
            <p className="mt-4 text-2xl">{tranRes[2]}</p>
          </div>
        </div>
        <div className="items-center justify-end hidden grid-cols-2 gap-2 mt-2 md:flex">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={300}
            style={{
              backgroundImage: 'url(/images/cpa/professional-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <LikeIcon />
            <p className="mt-4 text-2xl">{tranRes[3]}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={500}
            className="flex flex-col justify-center items-center w-[312px] h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl"
          >
            <QualityIcon />
            <p className="mt-4 text-2xl">{tranRes[4]}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={700}
            style={{
              backgroundImage: 'url(/images/cpa/effctive-bg.png)',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
            className="flex flex-col justify-center items-center w-[312px] h-[144px]"
          >
            <EffectiveIcon />
            <p className="mt-4 text-2xl">{tranRes[5]}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-12 md:hidden">
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={300}
            className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl"
          >
            <LikeIcon />
            <p className="mt-4 text-2xl">{tranRes[2]}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={500}
            className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl"
          >
            <RenewIcon />
            <p className="mt-4 text-2xl">{tranRes[3]}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={700}
            className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl"
          >
            <QualityIcon />
            <p className="mt-4 text-2xl">{tranRes[4]}</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={900}
            className="flex flex-col justify-center items-center w-auto h-[144px] bg-white bg-opacity-5 border border-white border-opacity-20 rounded-2xl"
          >
            <EffectiveIcon />
            <p className="mt-4 text-2xl">{tranRes[5]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus
