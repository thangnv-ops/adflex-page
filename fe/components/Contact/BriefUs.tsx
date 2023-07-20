import React, { useState } from 'react'
import PrimaryBtn from '../PrimaryBtn'
import PrimaryInput from '../PrimaryInput'
import PrimaryTextarea from '../PrimaryTextarea'
import { toast } from 'react-toastify'

function BriefUs() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState<number>()
  const [note, setNote] = useState('')

  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbzEu3SmCX7QYYHxDiyiM4Pc4_CV3CHlR06JWIxj3LH1qcADt5H9RZtQ9L4Mcxkn4a1B/exec'

  const handleSubmidForm = (e: any) => {
    e.preventDefault()

    const payload = {
      name,
      email,
      phoneNumber,
      note,
    }

    const formData = new FormData()

    Object.keys(payload).forEach((key: string) => {
      formData.append(key, String(payload[key]))
    })

    fetch(scriptUrl, { method: 'POST', body: formData })
      .then(() => {
        toast.success('Submit form successfully!')
      })
      .catch((err) => console.log(err))
  }
  return (
    <div data-aos="fade-up" data-aos-duration="700" className="max-w-[1126px] mx-auto px-4">
      <div
        style={{ boxShadow: '0px 32px 64px -12px rgba(16, 24, 40, 0.14)' }}
        className="flex flex-col px-4 py-10 bg-white rounded-lg md:px-10"
      >
        <p className="text-[30px] md:text-[40px] text-black text-center">
          Chúng tôi luôn muốn lắng nghe từ bạn
        </p>
        <p className="mt-2 text-xl">Hãy cho chúng tôi biết ý tưởng của bạn.</p>
        <div className="grid grid-cols-1 gap-8 mt-6 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <PrimaryInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Họ và tên"
              className="w-full"
            />
            <PrimaryInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full"
            />
            <PrimaryInput
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(Number(e.target.value))}
              placeholder="Số điện thoại"
              className="w-full"
            />
          </div>
          <div>
            <PrimaryTextarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Thông tin bạn quan tâm"
            />
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-8 mt-6 md:items-center md:flex-row">
          <div className="flex items-center gap-4">
            <input type="checkbox" />
            <p className="text-black">Nhận thông tin từ Adflex</p>
          </div>
          <PrimaryBtn onClick={handleSubmidForm} className="w-full md:w-auto">
            Gửi thông tin
          </PrimaryBtn>
        </div>
      </div>
    </div>
  )
}

export default BriefUs
