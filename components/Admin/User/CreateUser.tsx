import { UserReq, UserReqError } from '@/backend/service/user-service/user-req'
import { getEndpoint, userEndpoints } from '@/lib/endpoints'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'

import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { UserFrom } from './UserForm'

interface ICreateUser {
  callList: () => void
}

export const CreateUser = ({ callList }: ICreateUser) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [user, setUser] = useState<UserReq>({
    name: '',
    username: '',
    email: '',
    phone: '',
  })

  const addUser = useApiCall<string, UserReqError>({
    callApi: () => axios.post(getEndpoint(userEndpoints, 'add'), user),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      setUser({
        name: '',
        username: '',
        email: '',
        phone: '',
      })
      callList()
    },
  })

  const handleCreate = () => {
    addUser.setLetCall(true)
  }

  return (
    <>
      <Button onPress={onOpen}>Create user</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create user</ModalHeader>
              <ModalBody>
                <UserFrom user={user} setUser={setUser} error={addUser.error?.result} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCreate}>
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
