import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
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
import { toast } from 'react-toastify'

interface IDeleteContent {
  disable: boolean
  id?: string
  callList: () => void
}

export const DeleteContent = ({ disable, id, callList }: IDeleteContent) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const deleteContent = useApiCall<string, string>({
    callApi: () => axios.delete(`${getEndpoint(contentEndpoints, 'delete')}?ids=${id}`),
    handleError(status, message) {
      toast.error(message)
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      callList()
    },
  })

  const handleDelete = () => {
    deleteContent.setLetCall(true)
  }

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen} color="danger">
        Delete content
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Delete content</ModalHeader>
              <ModalBody>Are you sure to delete this content?</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="danger" onPress={handleDelete}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
