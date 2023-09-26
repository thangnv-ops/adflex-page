import * as Yup from 'yup'

const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const ContactSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập họ và tên'),
    phoneNumber: Yup.string()
      .matches(phoneRegex, 'Sai định dạng số điện thoại')
      .required('Bạn phải nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ').required('Bạn phải nhập email'),
    note: Yup.string().required('Bạn phải nhập thông tin'),
  })
