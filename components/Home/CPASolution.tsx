import { AnimatePresence, motion } from 'framer-motion'

import CloseDialogIcon from '../icons/CloseDialogIcon'
import { DialogOverlay } from '@reach/dialog'
import Image from 'next/image'
import Link from 'next/link'
import MotionDialogContent from '../MotionDialogContent'
import PlusIcon from '../icons/PlusIcon'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'
import { useState } from 'react'
import useTranslation from '@/hooks/useTranslation'

function CPASolution() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const translationResult = useTranslation([
    'Giải pháp CPA',
    `Nền tảng Affiliate Marketing CPA – Cost-per-action hàng đầu Châu Á phục vụ nhu cầu quảng cáo chuyển đổi mở rộng cho khách hàng tại Việt Nam và quốc tế.`,
    ` Với Strong knowhow về affiliate marketing (10+ năm kinh nghiệm) cùng nền tảng Data driven, AdFlex có thể đáp ứng KPI lớn (high volume traffic) và được
AppsFlyer xếp hạng top 6 trên toàn Đông Nam Á về chất lượng CPA.`,
    'Tìm hiểu thêm ',
  ])
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
          <div className="w-11 aspect-square relative">
            <Image layout="fill" src="/images/cpa-icon.png" alt="cpa" />
          </div>
          <PlusIcon />
        </div>
        <p className="mt-2 text-2xl">{translationResult[0]}</p>
        <p className="mt-2 text-justify">{translationResult[1]}</p>
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
                className="flex flex-col px-4 py-4 md:px-10 md:py-8 backdrop-blur-md"
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
                    <div className="w-11 aspect-square relative">
                      <Image layout="fill" src="/images/cpa-icon.png" alt="cpa" />
                    </div>
                    <p className="text-[32px] font-medium mt-4">{translationResult[0]}</p>
                    <p className="mt-4">{translationResult[2]}</p>
                    <Link href="/cpa">
                      <PrimaryBtn className="mt-8 md:mt-24">
                        <div className="flex items-center gap-2">
                          <p className="text-white">{translationResult[3]}</p>
                          <UpRightArrow />
                        </div>
                      </PrimaryBtn>
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

export default CPASolution
