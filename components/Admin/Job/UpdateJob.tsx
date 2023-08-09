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
import { useEffect, useState } from 'react'

import { JobReq, JobReqError } from '@/backend/service/job-service/job-req'
import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { toast } from 'react-toastify'
import { JobForm } from './JobForm'

interface IUpdateJob {
  callList: () => void
  jobState: JobReq
  disable: boolean
  id?: string
}

export const UpdateJob = ({ callList, disable, jobState, id }: IUpdateJob) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const [job, setJob] = useState<JobReq>({
    title: '',
    quantity: 0,
    content: '',
    deadline: '',
    salary: '',
  })

  const updateJob = useApiCall<string, JobReqError>({
    callApi: () => axios.put(`${getEndpoint(jobEndpoints, 'update')}?id=${id}`, job),
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

  useEffect(() => {
    updateJob.handleReset()
    setJob(jobState)
  }, [jobState])

  const handleUpdate = () => {
    updateJob.setLetCall(true)
  }

  return (
    <>
      <Button isDisabled={disable} onPress={onOpen}>
        Update job
      </Button>
      <Modal size="full" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Update job</ModalHeader>
              <div className="min-w-[300px] w-auto h-[90%] overflow-auto">
                <ModalBody>
                  <JobForm job={job} setJob={setJob} error={updateJob.error?.result} />
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
