import { ContentReq, ContentReqError } from '@/backend/service/content-service/content-req'
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
import { useState } from 'react'
import { toast } from 'react-toastify'
import { ContentForm } from './ContentFrom'

interface ICreateContent {
  callList: () => void
}

export const CreateContent = ({ callList }: ICreateContent) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [content, setContent] = useState<ContentReq>({
    route: '',
    componentName: '',
    content: [],
  })

  const addContent = useApiCall<string, ContentReqError>({
    callApi: () => axios.post(getEndpoint(contentEndpoints, 'add'), content),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      setContent({
        route: '',
        componentName: '',
        content: [],
      })
      callList()
    },
  })

  const handleCreate = () => {
    addContent.setLetCall(true)
  }

  return (
    <>
      <Button onPress={onOpen}>Create content</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create content</ModalHeader>
              <ModalBody>
                <ContentForm
                  content={content}
                  setContent={setContent}
                  error={addContent.error?.result}
                />
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
