import { JobReq, JobReqError } from '@/backend/service/job-service/job-req'
import RichTextEditor from '@/components/Editor'

import { Divider, Input } from '@nextui-org/react'
import React from 'react'

interface IJobForm {
  setJob: (req: JobReq) => void
  job: JobReq
  error?: JobReqError
}

export const JobForm = ({ job, setJob, error }: IJobForm) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob({ ...job, [e.target.id]: e.target.value })
  }

  const validate = (field: string) => {
    return error && !!error[field] ? 'invalid' : 'valid'
  }

  return (
    <div className=" w-full gap-4 flex flex-col gap-4 h-full overflow-auto">
      <Input
        id="title"
        type="text"
        label="Title"
        placeholder="Enter title"
        isRequired
        validationState={validate('title')}
        errorMessage={error?.title}
        value={job.title}
        onChange={onChange}
      />
      <Input
        id="quantity"
        type="number"
        label="Quantity"
        placeholder="Enter quantity"
        isRequired
        validationState={validate('quantity')}
        errorMessage={error?.quantity}
        value={String(job.quantity)}
        onChange={onChange}
      />
      <Input
        id="salary"
        type="text"
        label="Salary"
        placeholder="Enter salary"
        isRequired
        validationState={validate('salary')}
        errorMessage={error?.salary}
        value={job.salary}
        onChange={onChange}
      />
      <Input
        id="deadline"
        type="text"
        label="Deadline"
        placeholder="Enter deadline"
        isRequired
        validationState={validate('deadline')}
        errorMessage={error?.deadline}
        value={job.deadline}
        onChange={onChange}
      />
      <Divider className="my-4" />
      <h5>Content</h5>
      <RichTextEditor
        editorState={job.content}
        handleChange={(value) => setJob({ ...job, content: value })}
      />
    </div>
  )
}
