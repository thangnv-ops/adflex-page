import { AnimatePresence, motion } from 'framer-motion'

import useTranslation from '@/hooks/useTranslation'
import { DialogOverlay } from '@reach/dialog'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PrimaryBtn from '../PrimaryBtn'
import CheckedIcon from '../icons/CheckedIcon'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import PlusIcon from '../icons/PlusIcon'
import UpRightArrow from '../icons/UpRightArrow'

const opsrunAdvantage = [
  'Thiết kế và xây dựng hệ thống',
  'Tối ưu chi phí hiệu quả',
  'Quản trị và vận hành hệ thống',
  'Cloud billing',
  'CDN',
]

function OpsRunSolution() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const translateResult = useTranslation([
    'Giải pháp Opsrun',
    `Giải pháp tư vấn, thiết kế, triển khai, vận hành hệ thống CNTT trên nền tảng cloud server.`,
    'Opsrun - Giải pháp tư vấn, vận hành và thiết kế điện toán đám mây',
    ` Với hệ thống chuyên gia chất lượng cao có kinh nghiệm vận hành hệ thống lớn,
    Opsrun mang lại các giải pháp cloud server giúp doanh nghiệp tối ưu chi phí và
    dễ dàng quản trị.`,
    'Tìm hiểu thêm',
  ])

  const adTranslateRes = useTranslation([...opsrunAdvantage])

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="">
      <div
        style={{
          backgroundImage: 'url(/images/solution-bg1.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        onClick={open}
        className="cursor-pointer max-w-[488px] px-4 py-4 md:py-6 md:px-8"
      >
        <div className="flex items-center justify-between">
          <div className="w-[152px] aspect-[2/0.5] relative">
            <Image layout="fill" src="/images/opsrun-icon.png" alt="cpa" />
          </div>
          <PlusIcon />
        </div>
        <p className="mt-2 text-2xl">{translateResult[0]}</p>
        <p className="mt-2 text-justify">{translateResult[1]}</p>
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay onDismiss={close} className="z-50 flex items-center justify-center">
            <MotionDialogContent
              aria-label="Popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 max-w-[343px] !w-max !p-0 md:max-w-[684px] !bg-transparent"
            >
              <motion.div
                className="flex flex-col h-[500px] md:h-auto px-4 py-4 overflow-auto md:px-10 md:py-8 backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                style={{
                  backgroundImage: 'url(/images/cpa-popup-bg.png)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                }}
              >
                <div className="flex items-start">
                  <div className="">
                    <div className="w-[30%] aspect-[2/0.5] relative">
                      <Image layout="fill" src="/images/opsrun-img.png" alt="cpa" />
                    </div>
                    <p className="text-[32px] font-medium mt-4">{translateResult[2]}</p>
                    <p className="mt-4">{translateResult[3]}</p>
                    <div className="flex flex-col gap-4 mt-8">
                      {adTranslateRes.map((item, index) => (
                        <div key={`opsrun-${index}`} className="flex items-center gap-3">
                          <CheckedIcon />
                          {item}
                        </div>
                      ))}
                    </div>
                    <Link href="/opsrun">
                      <a>
                        <PrimaryBtn className="mt-8">
                          <div className="flex items-center gap-2">
                            <p className="text-white">{translateResult[4]}</p>
                            <UpRightArrow />
                          </div>
                        </PrimaryBtn>
                      </a>
                    </Link>
                  </div>
                  <div onClick={close} className="w-10 cursor-pointer">
                    <CloseDialogIcon />
                  </div>
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default OpsRunSolution
