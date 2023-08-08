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
import { useEffect, useState } from 'react'

import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { ContentForm } from './ContentFrom'

interface IUpdateContent {
  callList: () => void
  contentState: ContentReq
  disable: boolean
  id?: string
}

export const UpdateContent = ({ callList, contentState, disable, id }: IUpdateContent) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [content, setContent] = useState<ContentReq>({
    route: '',
    componentName: '',
    content: [],
  })

  const updateContent = useApiCall<string, ContentReqError>({
    callApi: () => axios.put(`${getEndpoint(contentEndpoints, 'update')}?id=${id}`, content),
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
    updateContent.handleReset()
    setContent(contentState)
  }, [contentState])

  const handleUpdate = () => {
    updateContent.setLetCall(true)
  }

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen}>
        Update content
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update content</ModalHeader>
              <ModalBody>
                <ContentForm
                  content={content}
                  setContent={setContent}
                  error={updateContent.error?.result}
                />
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
