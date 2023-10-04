import * as Yup from 'yup'

// const FILE_SIZE = 5 * 1024 * 1024
// const SUPPORTED_FORMATS = [
//   'application/pdf',
//   'application/msword',
//   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//   '.doc',
//   '.docx',
// ]
const phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g

export const SendCVSchema = Yup.object().shape({
  name: Yup.string().required('Bạn phải nhập họ và tên'),
  phoneNumber: Yup.string()
    .matches(phoneRegex, 'Sai định dạng số điện thoại')
    .required('Bạn phải nhập số điện thoại'),
  email: Yup.string().email('Email không hợp lệ').required('Bạn phải nhập email'),
  note: Yup.string().required('Bạn phải nhập thông tin'),
  //   file: Yup.mixed()
  //     .required('Bạn cần nhập file')
  //     .test('fileSize', 'Dung lượng quá lớn', (value: any) => value && value.size <= FILE_SIZE)
  //     .test(
  //       'fileFormat',
  //       'Không hỗ trơ',
  //       (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
  //     ),
})
