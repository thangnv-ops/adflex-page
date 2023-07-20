import React from 'react'
import CheckedIcon from '../icons/CheckedIcon'
import SecondaryBtn from '../SecondaryBtn'
import BriefUsModal from '../BriefUsModal'

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
  return (
    <div className="pt-24 bg-black">
      <div className="px-4 mx-auto max-w-maxContent">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={300}>
            <img src="/images/opsrun/devops-solution.png" alt="devops" />
          </div>
          <div data-aos="fade-up" data-aos-duration="700" data-aos-delay={500}>
            <p className="text-[30px] md:text-5xl">
              Giải pháp Devops <br /> cho doanh nghiệp
            </p>
            <p className="mt-8 text-xl">Tư vấn, thiết kế & triển khai hệ thống</p>
            <div className="flex flex-col gap-4 mt-6">
              {devopsAdvantage.map((item, index) => (
                <div key={`devops-${index}`} className="flex items-center gap-3">
                  <CheckedIcon />
                  {item}
                </div>
              ))}
            </div>
            <BriefUsModal>
              <SecondaryBtn className="mt-8">Liên hệ ngay với chúng tôi</SecondaryBtn>
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
              <p className="text-5xl">Dịch vụ Cloud Computing</p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {cloudComputingAdvantage.map((item, index) => (
                  <div key={`devops-${index}`} className="flex items-center gap-3">
                    <CheckedIcon />
                    {item}
                  </div>
                ))}
              </div>
              <BriefUsModal>
                <SecondaryBtn className="mt-8">Liên hệ ngay với chúng tôi</SecondaryBtn>
              </BriefUsModal>
            </div>
            <div className="block md:hidden">
              <img src="/images/opsrun/cloud-computing-mobile.png" alt="mobile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solution
