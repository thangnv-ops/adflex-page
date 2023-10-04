import useTranslation from '@/hooks/useTranslation'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'
import { Field, Form, Formik } from 'formik'
import { ContactSchema } from '@/validations/ContactSchema'

function BriefUs() {
  const tranRes = useTranslation([
    'Chúng tôi luôn muốn lắng nghe từ bạn',
    'Hãy cho chúng tôi biết ý tưởng của bạn.',
    'Họ và tên',
    'Số điện thoại',
    'Thông tin bạn quan tâm',
    'Nhận thông tin từ Adflex',
    'Gửi thông tin',
  ])

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10"
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">{tranRes[0]}</p>
        <p className="mt-2 text-xl">{tranRes[1]}</p>
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
            <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
              <div className="flex flex-col gap-6 text-black">
                <Field name="name">
                  {({ field, meta }: any) => (
                    <div>
                      <PrimaryInput {...field} placeholder={tranRes[2]} className="w-full" />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ field, meta }: any) => (
                    <div>
                      <PrimaryInput {...field} placeholder="Email" className="w-full" />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
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
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
              <div className="text-black">
                <Field name="note">
                  {({ field, meta }: any) => (
                    <div>
                      <PrimaryTextarea {...field} placeholder={tranRes[4]} />
                      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                    </div>
                  )}
                </Field>
              </div>
            </div>
            <div className="flex flex-col items-start justify-between gap-8 mt-6 md:items-center md:flex-row">
              <div className="flex items-center gap-4">
                <input type="checkbox" />
                <p className="text-black">{tranRes[5]}</p>
              </div>
              <PrimaryBtn type="submit" className="w-full md:w-auto">
                {tranRes[6]}
              </PrimaryBtn>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default BriefUs
