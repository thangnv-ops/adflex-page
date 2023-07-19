import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PlusIcon from '../icons/PlusIcon'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import CheckedIcon from '../icons/CheckedIcon'

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

  return (
    <div className="">
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
          <img src="/images/opsrun-icon.png" alt="cpa" className="w-[152px]" />
          <PlusIcon />
        </div>
        <p className="mt-2 text-2xl">Giải pháp Opsrun</p>
        <p className="mt-2 text-justify">
          Giải pháp tư vấn, thiết kế, triển khai, vận hành hệ thống CNTT trên nền tảng cloud server.
        </p>
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
                    <img src="/images/opsrun-img.png" alt="cpa" className="w-246" />
                    <p className="text-[32px] font-medium mt-4">
                      Opsrun - Giải pháp tư vấn, vận hành và thiết kế điện toán đám mây
                    </p>
                    <p className="mt-4">
                      Với hệ thống chuyên gia chất lượng cao có kinh nghiệm vận hành hệ thống lớn,
                      Opsrun mang lại các giải pháp cloud server giúp doanh nghiệp tối ưu chi phí và
                      dễ dàng quản trị.
                    </p>
                    <div className="flex flex-col gap-4 mt-8">
                      {opsrunAdvantage.map((item, index) => (
                        <div key={`opsrun-${index}`} className="flex items-center gap-3">
                          <CheckedIcon />
                          {item}
                        </div>
                      ))}
                    </div>
                    <PrimaryBtn className="mt-8">
                      <div className="flex items-center gap-2">
                        <p className="text-white">Tìm hiểu thêm </p>
                        <UpRightArrow />
                      </div>
                    </PrimaryBtn>
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
