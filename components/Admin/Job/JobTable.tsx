import { getEndpoint, jobEndpoints } from '@/lib/endpoints'
import {
  Card,
  CardBody,
  Divider,
  Pagination,
  Selection,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
} from '@nextui-org/react'
import { useEffect, useState } from 'react'

import { JobReq } from '@/backend/service/job-service/job-req'
import { JobRes } from '@/backend/service/job-service/job-res'
import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { toast } from 'react-toastify'
import { CreateJob } from './CreateJob'
import { DeleteJob } from './DeleteJob'
import { UpdateJob } from './UpdateJob'

const columns = [
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: 'deadline',
    label: 'Deadline',
  },
  {
    key: 'quantity',
    label: 'Quantity',
  },
  {
    key: 'salary',
    label: 'Salary',
  },
]

export const JobTable = () => {
  const [selected, setSelected] = useState<JobRes | undefined>()
  const [page, setPage] = useState(1)
  const getList = useApiCall<CommonListResult<JobRes>, string>({
    callApi: () => axios.get(`${getEndpoint(jobEndpoints, 'getList')}?page=${page}&size=10`),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const { data } = getList

  const handleCallList = () => {
    setSelected(undefined)
    getList.setLetCall(true)
  }

  useEffect(() => {
    handleCallList()
  }, [page])

  const handleSelected = (keys: Selection) => {
    const id = Array.from(keys)[0]
    setSelected(data.result.data.find((item) => item._id === id))
  }

  const getSelectedReq = (): JobReq => {
    if (selected) {
      return {
        title: selected.title,
        quantity: selected.quantity,
        content: selected.content,
        deadline: selected.deadline,
        salary: selected.salary,
      }
    }
    return {
      title: '',
      quantity: 0,
      content: '',
      deadline: '',
      salary: '',
    }
  }

  const selectedJob = getSelectedReq()

  return (
    <>
      <div className="flex h-5 items-center space-x-4 text-small">
        <CreateJob callList={handleCallList} />
        <Divider orientation="vertical" />
        <UpdateJob
          id={selected?._id}
          callList={handleCallList}
          jobState={selectedJob}
          disable={!selected || !selectedJob.title}
        />
        <Divider orientation="vertical" />
        <DeleteJob
          id={selected?._id}
          callList={handleCallList}
          disable={!selected || !selectedJob.title}
        />
      </div>
      <Divider className="my-4" />
      <Table
        color="primary"
        selectionMode="single"
        aria-label="JobTable"
        onSelectionChange={handleSelected}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={data?.result?.data || []} emptyContent="No jobs">
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Divider className="my-4" />
      <Card>
        <CardBody>
          <Pagination
            total={Math.floor((getList.data?.result.total || 0) / 10) + 1}
            page={page}
            onChange={(thisPage) => {
              setPage(thisPage)
            }}
          />
        </CardBody>
      </Card>
    </>
  )
}
