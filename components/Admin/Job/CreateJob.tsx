import { getEndpoint, jobEndpoints } from '@/lib/endpoints'
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'

import { JobReq, JobReqError } from '@/backend/service/job-service/job-req'
import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { JobForm } from './JobForm'

interface ICreateJob {
  callList: () => void
}

export const CreateJob = ({ callList }: ICreateJob) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [job, setJob] = useState<JobReq>({
    title: '',
    quantity: 0,
    content: '',
    deadline: '',
    salary: '',
  })

  const createJob = useApiCall<string, JobReqError>({
    callApi: () => axios.post(getEndpoint(jobEndpoints, 'add'), job),
    handleError(status, message) {
      if (status !== 400) {
        toast.error(message)
      }
    },
    handleSuccess(message) {
      toast.success(message)
      onOpenChange()
      setJob({
        title: '',
        quantity: 0,
        content: '',
        deadline: '',
        salary: '',
      })
      callList()
    },
  })

  const handleCreate = () => {
    createJob.setLetCall(true)
  }

  return (
    <>
      <Button onPress={onOpen}>Create job</Button>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create job</ModalHeader>
              <div className="min-w-[300px] w-auto h-[90%] overflow-auto">
                <ModalBody>
                  <JobForm job={job} setJob={setJob} error={createJob.error?.result} />
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
