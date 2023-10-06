import useTranslation from '@/hooks/useTranslation'
import { handleSubmitForm } from '@/lib/submitFormToGoogleSheet'
import PrimaryInput from './PrimaryInput'
import PrimaryTextarea from './PrimaryTextarea'
import SecondaryBtn from './SecondaryBtn'
import { Field, Form, Formik } from 'formik'
import { ContactSchema } from '@/validations/ContactSchema'

function Map() {
  const tranRes = useTranslation([
    'Đăng ký liên hệ hợp tác',
    'Chúng tôi luôn muốn lắng nghe từ bạn',
    'Họ và tên',
    'Số điện thoại',
    'Thông tin bạn quan tâm',
    'Gửi thông tin',
  ])

  return (
    <div className="px-4 py-12 mx-auto max-w-maxContent">
      <div
        data-aos="fade-up"
        data-aos-duration="700"
        data-aos-delay={300}
        style={{
          backgroundImage: 'url(/images/map-bg.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="grid grid-cols-1 md:grid-cols-2 rounded-2xl"
      >
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
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay={500}
              className="flex flex-col px-4 py-4 text-black md:px-20 md:py-24"
            >
              <p className="text-[28px] md:text-[32px] text-white ">{tranRes[0]}</p>
              <p className="mt-2 text-xl text-white">{tranRes[1]}</p>
              <Field name="name">
                {({ field, meta }: any) => (
                  <div>
                    <PrimaryInput {...field} placeholder={tranRes[2]} className="w-full mt-6" />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="email">
                {({ field, meta }: any) => (
                  <div>
                    <PrimaryInput {...field} placeholder="Email" className="w-full mt-6" />
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
                      className="w-full mt-6"
                      type="string"
                    />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <Field name="note">
                {({ field, meta }: any) => (
                  <div>
                    <PrimaryTextarea
                      {...field}
                      placeholder={tranRes[4]}
                      className="h-[128px] mt-6"
                    />
                    {meta.touched && meta.error && <div className="error">{meta.error}</div>}
                  </div>
                )}
              </Field>
              <SecondaryBtn type="submit" className="max-w-[216px] mt-6 text-white">
                {tranRes[5]}
              </SecondaryBtn>
            </div>
          </Form>
        </Formik>
        <div className="p-4 md:p-0">
          <iframe
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay={700}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.980414871609!2d105.78404967574954!3d20.993422180647144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad53b87226c1%3A0x8db6892d7e33a120!2zRWNvTGlmZSBU4buRIEjhu691!5e0!3m2!1svi!2s!4v1689585130721!5m2!1svi!2s"
            className="w-full h-[380px] md:h-full rounded-lg md:rounded-none md:rounded-r-2xl"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}

export default Map
