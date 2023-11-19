import { contentEndpoints, getEndpoint } from '@/lib/endpoints'
import {
  Button,
  ButtonGroup,
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

import { ContentReq } from '@/backend/service/content-service/content-req'
import { ContentRes } from '@/backend/service/content-service/content-res'
import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { toast } from 'react-toastify'
import { CreateContent } from './CreateContent'
import { DeleteContent } from './DeleteContent'
import { UpdateContent } from './UpdateContent'

const columns = [
  {
    key: 'route',
    label: 'Route',
  },
  {
    key: 'componentName',
    label: 'Component name',
  },
  {
    key: 'content',
    label: 'Content',
  },
]
export const ContentTable = () => {
  const [selected, setSelected] = useState<ContentRes | undefined>()
  const [route, setRoute] = useState('/')
  const [page, setPage] = useState(1)

  const getList = useApiCall<CommonListResult<ContentRes>, string>({
    callApi: () =>
      axios.get(`${getEndpoint(contentEndpoints, 'getList')}?route=${route}&page=${page}&size=10`),
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
  }, [route, page])

  const handleSelected = (keys: Selection) => {
    const id = Array.from(keys)[0]
    setSelected(data.result.data.find((item) => item._id === id))
  }

  const getSelectedReq = (): ContentReq => {
    if (selected) {
      return {
        route: selected.route,
        componentName: selected.componentName,
        content: selected.content,
      }
    }
    return {
      route: '',
      componentName: '',
      content: [],
    }
  }

  const selectedContent = getSelectedReq()

  return (
    <>
      <div className="flex h-14 items-center text-small min-w-[300px] overflow-auto">
        <div className="flex items-center gap-4 w-content h-full">
          <CreateContent callList={handleCallList} />
          <Divider orientation="vertical" />
          <UpdateContent
            id={selected?._id}
            callList={handleCallList}
            contentState={selectedContent}
            disable={!selected || !selectedContent.content}
          />
          <Divider orientation="vertical" />
          <DeleteContent
            id={selected?._id}
            callList={handleCallList}
            disable={!selected || !selectedContent.content}
          />
        </div>
      </div>
      <Divider className="my-4" />
      <div className="min-w-[300px] h-14 overflow-x-auto">
        <ButtonGroup>
          <Button onPress={() => setRoute('/')}>Home</Button>
          <Button onPress={() => setRoute('/cpa')}>Cpa</Button>
          <Button onPress={() => setRoute('/pushtimize')}>Pushtimize</Button>
          <Button onPress={() => setRoute('/opsrun')}>OpsRun</Button>
          <Button onPress={() => setRoute('/contact')}>Contact</Button>
        </ButtonGroup>
      </div>
      <Divider className="my-4" />
      <Table
        color="primary"
        selectionMode="single"
        aria-label="UserTable"
        onSelectionChange={handleSelected}
      >
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody items={data?.result?.data || []} emptyContent="No contents">
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
