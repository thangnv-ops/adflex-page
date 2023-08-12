import useTranslation from '@/hooks/useTranslation'

function Hero() {
  const tranRes = useTranslation(['Liên hệ', 'Kết nối với chúng tôi'])

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="700"
      style={{
        backgroundImage: 'url(/images/jobs/jobs-hero-bg.png)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="flex flex-col items-center justify-center w-screen h-screen px-4"
    >
      <p className="text-lg md:text-2xl">{tranRes[0]}</p>
      <p className="mt-2 text-[30px] md:text-5xl">{tranRes[1]}</p>
    </div>
  )
}

export default Hero
