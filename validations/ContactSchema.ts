import * as Yup from 'yup'

export const ContactSchema = () =>
  Yup.object().shape({
    name: Yup.string().required('Bạn phải nhập họ và tên'),
    phoneNumber: Yup.string().required('Bạn phải nhập số điện thoại'),
    email: Yup.string().email('Email không hợp lệ').required('Bạn phải nhập email'),
    note: Yup.string().required('Bạn phải nhập thông tin'),
  })
