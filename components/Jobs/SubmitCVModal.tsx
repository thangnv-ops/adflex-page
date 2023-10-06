import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence } from 'framer-motion'
import { ReactNode, useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import InputFile from '../InputFile'
import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { SendCVSchema } from '@/validations/SendCVSchema'
import { toast } from 'react-toastify'

function SubmitCVModal({ children }: { children: ReactNode }) {
  const [showDialog, setShowDialog] = useState(false)
  const [file, setFile] = useState(null)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const handleSubmitForm = (values) => {
    const formData = new FormData()
    formData.append('to_email', process.env.NEXT_PUBLIC_RECEIVE_EMAIL)
    formData.append(
      'subject',
      `Aplly CV: Name: ${values.name}, Phone: ${values.phoneNumber}, Email: ${values.email}`
    )
    formData.append('message', values.note)
    formData.append('attachment', file)
    const res = async () => {
      await axios.post('/api/send_cv', formData)
    }
    toast.promise(res(), {
      pending: 'Your request is being processed...',
      success: 'Submit form successfully!',
      error: 'Submit failed, please try again!',
    })
  }

  const handleUploadFile = (e) => {
    setFile(e.target.files[0])
  }
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
              className="z-50 min-w-[343px] !p-0 md:min-w-[1114px] !bg-transparent"
            >
              <Formik
                initialValues={{
                  name: null,
                  email: null,
                  phoneNumber: null,
                  note: null,
                }}
                validationSchema={SendCVSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmitForm(values)
                  setSubmitting(false)
                }}
              >
                <Form>
                  <div className="flex flex-col p-4 px-4 bg-white rounded-lg md:px-10 md:py-10 bg-opacity-60 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <p className="text-[24px] md:text-[40px]">Nộp CV ứng tuyển</p>
                      <CloseDialogIcon className="w-8 cursor-pointer md:w-10" onClick={close} />
                    </div>
                    <p className="mt-2 text-sm md:text-xl">
                      Hãy cho chúng tôi thấy năng lực của bạn.
                    </p>
                    <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                      <div className="flex flex-col gap-6">
                        <Field name="name">
                          {({ field, meta }: any) => (
                            <div>
                              <PrimaryInput {...field} placeholder="Họ và tên" className="w-full" />
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
                                placeholder="Số điện thoại"
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
                              <PrimaryTextarea
                                className="w-full h-[150px]"
                                {...field}
                                placeholder="Giới thiệu về bản thân bạn"
                              />
                              {meta.touched && meta.error && (
                                <div className="error">{meta.error}</div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
                      <div>
                        <div>{file?.name && file.name}</div>
                        <InputFile onChange={(e) => handleUploadFile(e)} />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-end gap-8 mt-6 md:flex-row">
                      <PrimaryBtn type="submit">Gửi thông tin</PrimaryBtn>
                    </div>
                  </div>
                </Form>
              </Formik>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SubmitCVModal
