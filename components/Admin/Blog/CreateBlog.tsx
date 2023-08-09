import { BlogReq, BlogRequestError } from '@/backend/service/blog-service/blog-req'
import { useApiCall } from '@/hooks/useCallApi'
import { blogEndpoints, getEndpoint } from '@/lib/endpoints'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { BlogForm } from './BlogForm'

interface ICreateBlog {
  callList: () => void
}

export const CreateBlog = ({ callList }: ICreateBlog) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [blog, setBlog] = useState<BlogReq>({
    thumbnail: '',
    title: '',
    slug: '',
    shortDescription: '',
    content: '',
    tags: [],
  })

  const addBlog = useApiCall<string, BlogRequestError>({
    callApi: () => axios.post(getEndpoint(blogEndpoints, 'add'), blog),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      setBlog({
        thumbnail: '',
        title: '',
        slug: '',
        shortDescription: '',
        content: '',
        tags: [],
      })
      callList()
    },
  })

  const handleCreate = () => {
    addBlog.setLetCall(true)
  }

  return (
    <>
      <Button onPress={onOpen}>Create blog</Button>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create blog</ModalHeader>
              <div className="min-w-[300px] w-auto h-[90%] overflow-auto">
                <ModalBody>
                  <BlogForm blog={blog} setBlog={setBlog} error={addBlog?.error?.result} />
                </ModalBody>
              </div>
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
