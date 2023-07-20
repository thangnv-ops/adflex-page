import { toast } from 'react-toastify'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbzEu3SmCX7QYYHxDiyiM4Pc4_CV3CHlR06JWIxj3LH1qcADt5H9RZtQ9L4Mcxkn4a1B/exec'

export const handleSubmitForm = ({ name, email, phoneNumber, note }) => {
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

  const finish = async () => {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      body: formData,
      mode: 'no-cors',
    }).catch((err) => console.log(err))
  }
  toast.promise(finish(), {
    pending: 'Your request is being processed...',
    success: 'Submit form successfully!',
    error: 'Submit failed, please try again!',
  })
}
