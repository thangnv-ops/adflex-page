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
import { useEffect, useState } from 'react'

import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { UserFrom } from './UserFrom'

interface IUpdateUser {
  callList: () => void
  userState: UserReq
  disable: boolean
  id?: string
}

export const UpdateUser = ({ callList, disable, userState, id }: IUpdateUser) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [user, setUser] = useState<UserReq>({
    name: '',
    username: '',
    email: '',
    phone: '',
  })

  const updateUser = useApiCall<string, UserReqError>({
    callApi: () => axios.put(`${getEndpoint(userEndpoints, 'update')}?id=${id}`, user),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      callList()
    },
  })

  useEffect(() => {
    setUser(userState)
    updateUser.handleReset()
  }, [userState])

  const handleUpdate = () => {
    updateUser.setLetCall(true)
  }

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen}>
        Update user
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update user</ModalHeader>
              <ModalBody>
                <UserFrom user={user} setUser={setUser} error={updateUser.error?.result} />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleUpdate}>
                  Update
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
