import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import RedBtn from '../RedBtn'

function Banner() {
  const tranRes = useTranslation([
    'Bạn muốn tối ưu hiệu quả quảng cáo',
    'hoặc đẩy mạnh thu nhập?',
    'Đừng chần chừ, hãy để lại thông tin, chúng tôi sẽ liên hệ ngay với bạn',
    'trong vòng 24h',
    'Đăng ký ngay',
  ])

  return (
    <div className="px-4 mx-auto mt-12 max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={300}
        style={{
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-black md:bg-[url(/images/pushtimize/pushtimize-banner.png)]"
      >
        <div className="p-6 md:p-12">
          <p className="!text-[28px] !md:text-[32px]">
            {tranRes[0]}
            <br className="hidden md:block" /> {tranRes[1]}
          </p>
          <p className="mt-4">
            {tranRes[2]} <br className="hidden md:block" /> {tranRes[3]}
          </p>
          <BriefUsModal>
            <RedBtn className="mt-4">{tranRes[4]}</RedBtn>
          </BriefUsModal>
        </div>
        <div className="block md:hidden">
          <Image
            layout="fill"
            src="/images/pushtimize/pushtimize-banner-img.png"
            alt="img"
            className="rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
