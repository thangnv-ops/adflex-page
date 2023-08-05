import useTranslation from '@/hooks/useTranslation'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'
import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import MotionDialogContent from './MotionDialogContent'
import PrimaryBtn from './PrimaryBtn'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import CloseDialogIcon from './icons/CloseDialogIcon'

function BriefUsModal({ children }: { children: ReactNode }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [note, setNote] = useState('')

  const tranRes = useTranslation([
    'Đăng ký liên hệ hợp tác',
    'Hãy cho chúng tôi biết vấn đề bạn đang gặp phải',
    'Họ và tên',
    'Số điện thoại',
    'Giải pháp bạn quan tâm',
    'Nhận thông tin từ AdFlex',
    'Gửi thông tin',
  ])

  return (
    <div className="">
      <div onClick={open} className="cursor-pointer">
        {children}
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay onDismiss={close} className="z-50 flex items-center justify-center !mx-">
            <MotionDialogContent
              aria-label="Popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 min-w-[343px] !p-0 md:min-w-[886px] !bg-transparent"
            >
              <motion.form
                className="flex flex-col p-4 px-4 bg-white rounded-lg md:px-10 md:py-10 bg-opacity-60 backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                method="post"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[24px] md:text-[40px]">{tranRes[0]}</p>
                  <CloseDialogIcon className="w-8 cursor-pointer md:w-10" onClick={close} />
                </div>
                <p className="mt-2 text-sm md:text-xl">{tranRes[1]}</p>
                <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                  <div className="flex flex-col gap-6">
                    <PrimaryInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={tranRes[2]}
                      className="w-full"
                    />
                    <PrimaryInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="w-full"
                    />
                    <PrimaryInput
                      value={String(phoneNumber)}
                      onChange={(e) => setPhoneNumber(Number(e.target.value))}
                      placeholder={tranRes[3]}
                      className="w-full"
                      type="number"
                    />
                  </div>
                  <div>
                    <PrimaryTextarea
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={tranRes[4]}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-8 mt-6 md:flex-row">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" />
                    <p>{tranRes[5]}</p>
                  </div>
                  <PrimaryBtn
                    type="submit"
                    onClick={() => handleSubmitForm({ name, email, phoneNumber, note })}
                  >
                    {tranRes[6]}
                  </PrimaryBtn>
                </div>
              </motion.form>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BriefUsModal
