import { useGetContent } from '@/hooks/useGetContent'
import useTranslation from '@/hooks/useTranslation'
import Image from 'next/image'
import BriefUsModal from '../BriefUsModal'
import SecondaryBtn from '../SecondaryBtn'
import CheckedIcon from '../icons/CheckedIcon'

const devopsAdvantage = ['Tối ưu chi phí hệ thống', 'Giám sát hệ thống', 'Vận hành hệ thống']
const cloudComputingAdvantage = [
  'Dịch vụ Billing',
  'Cost Optimization (FinOps)',
  'Cloud Migration',
  'Managed Service',
  'Cloud Modernization',
  'Dịch vụ CDN',
]

function Solution() {
  const content = useGetContent({
    componentName: `${Solution.name}-main`,
    defaultValue: [
      'Giải pháp Devops',
      'cho doanh nghiệp',
      'Tư vấn, thiết kế & triển khai hệ thống',
      'Liên hệ ngay với chúng tôi',
      'Dịch vụ Cloud Computing',
      'Liên hệ ngay với chúng tôi',
    ],
  })
  const tranRes = useTranslation(content)

  const contentDevops = useGetContent({
    componentName: `${Solution.name}-devops`,
    defaultValue: devopsAdvantage,
  })
  const tranDevopsRes = useTranslation(contentDevops)

  const contentCloud = useGetContent({
    componentName: `${Solution.name}-cloud`,
    defaultValue: cloudComputingAdvantage,
  })
  const tranCloudRes = useTranslation(contentCloud)

  return (
    <div className="pt-24 bg-black">
      <div className="px-4 mx-auto max-w-maxContent">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={300}>
            <div className="w-full aspect-[1.1/1] relative">
              <Image fill src="/images/opsrun/devops-solution.png" alt="devops" />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={500}>
            <p className="text-[30px] md:text-5xl">
              {tranRes[0]} <br /> {tranRes[1]}
            </p>
            <p className="mt-8 text-xl">{tranRes[2]}</p>
            <div className="flex flex-col gap-4 mt-6">
              {tranDevopsRes.map((item, index) => (
                <div key={`devops-${index}`} className="flex items-center gap-3">
                  <CheckedIcon />
                  {item}
                </div>
              ))}
            </div>
            <BriefUsModal>
              <SecondaryBtn className="mt-8">{tranRes[3]}</SecondaryBtn>
            </BriefUsModal>
          </div>
        </div>
      </div>
      <div
        style={{
          // backgroundImage: 'url(/images/opsrun/cloud-computing.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="bg-black md:bg-[url(/images/opsrun/cloud-computing.png)]"
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={500}
      >
        <div className="pt-32 mx-auto max-w-maxContent pb-52">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={300} className="px-4">
              <p className="text-5xl">{tranRes[4]}</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {tranCloudRes.map((item, index) => (
                  <div key={`devops-${index}`} className="flex items-center gap-3">
                    <CheckedIcon />
                    {item}
                  </div>
                ))}
              </div>
              <BriefUsModal>
                <SecondaryBtn className="mt-8">{tranRes[5]}</SecondaryBtn>
              </BriefUsModal>
            </div>
            <div className="block md:hidden">
              <div className="w-full aspect-ratio relative">
                <Image fill src="/images/opsrun/cloud-computing-mobile.png" alt="mobile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
