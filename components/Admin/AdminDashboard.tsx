import { LoginReq, LoginReqError } from '@/backend/service/user-service/login-req'
import { getEndpoint, userEndpoints } from '@/lib/endpoints'
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'

import { LoginRes } from '@/backend/service/user-service/login-res'
import { useApiCall } from '@/hooks/useCallApi'
import { TOKEN_COOKIE_KEY } from '@/lib'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { toast } from 'react-toastify'

export const AdminDashboard = () => {
  const [req, serReq] = useState<LoginReq>({
    username: '',
    password: '',
  })
  const [, setCookies] = useCookies([TOKEN_COOKIE_KEY])

  const router = useRouter()

  const login = useApiCall<LoginRes, LoginReqError>({
    callApi: () =>
      axios.post(`${getEndpoint(userEndpoints, 'authLogin')}`, {
        ...req,
        password: Buffer.from(req.password).toString('base64'),
      }),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message, data) {
      setCookies(TOKEN_COOKIE_KEY, data.token)
      router.push('/admin/users')
      toast.success(message)
    },
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    serReq({ ...req, [e.target.id]: e.target.value })
  }

  const validate = (field: string) => {
    return login.error && !!login.error[field] ? 'invalid' : 'valid'
  }

  const handleLogin = () => {
    login.setLetCall(true)
  }

  return (
    <Modal isOpen>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">Login</ModalHeader>
        <ModalBody>
          <Input
            id="username"
            type="text"
            label="Username"
            placeholder="Enter username"
            isRequired
            validationState={validate('username')}
            errorMessage={login.error?.result.username}
            value={req.username}
            onChange={onChange}
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            isRequired
            validationState={validate('password')}
            errorMessage={login.error?.result.password}
            value={req.password}
            onChange={onChange}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onPress={handleLogin}>
            Login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
