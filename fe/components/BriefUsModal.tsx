import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import MotionDialogContent from './MotionDialogContent'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import PrimaryBtn from './PrimaryBtn'
import CloseDialogIcon from './icons/CloseDialogIcon'

function BriefUsModal({ children }: { children: ReactNode }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div className="">
      <div onClick={open} className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay onDismiss={close} className="z-50 flex items-center justify-center">
            <MotionDialogContent
              aria-label="Popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] !p-4 md:min-w-[1114px] !bg-transparent"
            >
              <motion.div
                className="flex flex-col px-10 py-10 bg-white rounded-lg bg-opacity-60 backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[40px]">Đăng ký nhận báo giá</p>
                  <CloseDialogIcon className="cursor-pointer" onClick={close} />
                </div>
                <p className="mt-2 text-xl">Hãy cho chúng tôi biết ý tưởng của bạn.</p>
                <div className="grid grid-cols-2 gap-8 mt-6">
                  <div className="flex flex-col gap-6">
                    <PrimaryInput placeholder="Họ và tên" className="w-full" />
                    <PrimaryInput placeholder="Email" className="w-full" />
                    <PrimaryInput placeholder="Số điện thoại" className="w-full" />
                  </div>
                  <div>
                    <PrimaryTextarea placeholder="Thông tin bạn quan tâm" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-8 mt-6">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>Nhận thông tin từ Adflex</p>
                  </div>
                  <PrimaryBtn>Gửi thông tin</PrimaryBtn>
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BriefUsModal
