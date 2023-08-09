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
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { BlogForm } from './BlogForm'

interface IUpdateBlog {
  callList: () => void
  blogState: BlogReq
  disable: boolean
  id?: string
}

export const UpdateBlog = ({ callList, blogState, disable, id }: IUpdateBlog) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [blog, setBlog] = useState<BlogReq>({
    thumbnail: '',
    title: '',
    slug: '',
    shortDescription: '',
    content: '',
    tags: [],
  })

  const updateBlog = useApiCall<string, BlogRequestError>({
    callApi: () => axios.put(`${getEndpoint(blogEndpoints, 'update')}?id=${id}`, blog),
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

  const handleUpdate = () => {
    updateBlog.setLetCall(true)
  }

  useEffect(() => {
    updateBlog.handleReset()
    setBlog(blogState)
  }, [blogState])

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen}>
        Update blog
      </Button>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update blog</ModalHeader>
              <div className="min-w-[300px] w-auto h-[90%] overflow-auto">
                <ModalBody>
                  <BlogForm blog={blog} setBlog={setBlog} error={updateBlog?.error?.result} />
                </ModalBody>
              </div>
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
