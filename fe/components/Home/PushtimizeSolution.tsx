import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PlusIcon from '../icons/PlusIcon'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import CheckedIcon from '../icons/CheckedIcon'

const pushtimizeAdvantage = [
  'Đa dạng loại hình quảng cáo, tiếp cận tối đa khách hàng',
  'Target chuyên sâu đến đúng đối tượng khách hàng',
  'Nhà quảng cáo chủ động khởi tạo & quản lý chiến dịch',
  'Publisher có thể tự tích hợp website & quản lý doanh thu',
]

function PushtimizeSolution() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="">
      <div
        style={{
          backgroundImage: 'url(/images/solution-bg2.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        onClick={open}
        className="cursor-pointer max-w-[488px] px-4 py-4 md:py-6 md:px-8"
      >
        <div className="flex items-center justify-between">
          <PlusIcon />
          <img src="/images/pushtimize-icon.png" alt="cpa" className="w-[152px]" />
        </div>
        <p className="mt-2 text-2xl text-right">Giải pháp Pushtimize</p>
        <p className="mt-2 text-right">
          Nền tảng quảng cáo tự động đầu tiên tại Đông Nam Á, giúp kết nối các nhà quảng cáo với
          hàng triệu người dùng
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
              className="z-50 max-w-[343px] !w-max !p-0 md:max-w-[684px]  !bg-transparent"
            >
              <motion.div
                className="flex flex-col px-4 py-4 md:px-10 md:py-8 h-[500px] md:h-auto overflow-auto backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                style={{
                  backgroundImage: 'url(/images/pushtimize-popup-bg.png)',
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
                      {pushtimizeAdvantage.map((item, index) => (
                        <div key={`opsrun-${index}`} className="flex items-center gap-3">
                          <CheckedIcon />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-end">
                      <PrimaryBtn className="mt-8">
                        <div className="flex items-center gap-2">
                          <p className="text-white">Tìm hiểu thêm </p>
                          <UpRightArrow />
                        </div>
                      </PrimaryBtn>
                    </div>
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

export default PushtimizeSolution
