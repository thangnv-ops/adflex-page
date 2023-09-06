import useTranslation from '@/hooks/useTranslation'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'
import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import MotionDialogContent from './MotionDialogContent'
import PrimaryBtn from './PrimaryBtn'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import CloseDialogIcon from './icons/CloseDialogIcon'
import { Field, Formik, Form } from 'formik'
import { ContactSchema } from '@/validations/ContactSchema'

function BriefUsModal({ children }: { children: ReactNode }) {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

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
              <div className="flex flex-col p-4 px-4 bg-white rounded-lg md:px-10 md:py-10 bg-opacity-60 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <p className="text-[24px] md:text-[40px]">{tranRes[0]}</p>
                  <CloseDialogIcon className="w-8 cursor-pointer md:w-10" onClick={close} />
                </div>
                <Formik
                  initialValues={{
                    name: null,
                    email: null,
                    phoneNumber: null,
                    note: null,
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, { setSubmitting }) => {
                    handleSubmitForm(values)
                    setSubmitting(false)
                  }}
                >
                  <Form>
                    <p className="mt-2 text-sm md:text-xl">{tranRes[1]}</p>
                    <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                      <div className="flex flex-col gap-6">
                        <Field name="name">
                          {({ field, meta }: any) => (
                            <div>
                              <PrimaryInput
                                {...field}
                                placeholder={tranRes[2]}
                                className="w-full"
                              />
                              {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="email">
                          {({ field, meta }: any) => (
                            <div>
                              <PrimaryInput {...field} placeholder="Email" className="w-full" />
                              {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                        <Field name="phoneNumber">
                          {({ field, meta }: any) => (
                            <div>
                              <PrimaryInput
                                {...field}
                                placeholder={tranRes[3]}
                                className="w-full"
                                type="string"
                              />
                              {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div>
                        <Field name="note">
                          {({ field, meta }: any) => (
                            <div>
                              <PrimaryTextarea {...field} placeholder={tranRes[4]} />
                              {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-8 mt-6 md:flex-row">
                      <div className="flex items-center gap-4">
                        <input type="checkbox" />
                        <p>{tranRes[5]}</p>
                      </div>
                      <PrimaryBtn type="submit">{tranRes[6]}</PrimaryBtn>
                    </div>
                  </Form>
                </Formik>
              </div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BriefUsModal
