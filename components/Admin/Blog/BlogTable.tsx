import { BlogReq } from '@/backend/service/blog-service/blog-req'
import { BlogRes } from '@/backend/service/blog-service/blog-res'
import { useApiCall } from '@/hooks/useCallApi'
import { blogEndpoints, getEndpoint } from '@/lib/endpoints'
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
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { CreateBlog } from './CreateBlog'
import { DeleteBlog } from './DeleteBlog'
import { UpdateBlog } from './UpdateBlog'

const columns = [
  {
    key: 'title',
    label: 'Title',
  },
  {
    key: 'shortDescription',
    label: 'Short description',
  },
  {
    key: 'createdDate',
    label: 'Created date',
  },

  {
    key: 'tags',
    label: 'Tags',
  },
]
export const BlogTable = () => {
  const [selected, setSelected] = useState<BlogRes | undefined>()
  const [page, setPage] = useState(1)

  const getList = useApiCall<CommonListResult<BlogRes>, string>({
    callApi: () => axios.get(`${getEndpoint(blogEndpoints, 'getList')}?page=${page}&size=10`),
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

  const getSelectedReq = (): BlogReq => {
    if (selected) {
      return {
        thumbnail: selected.thumbnail,
        title: selected.title,
        slug: selected.slug,
        shortDescription: selected.shortDescription,
        content: selected.content,
        tags: selected.tags,
      }
    }
    return {
      thumbnail: '',
      title: '',
      slug: '',
      shortDescription: '',
      content: '',
      tags: [],
    }
  }

  const selectedBlog = getSelectedReq()

  return (
    <>
      <div className="flex h-14 items-center text-small min-w-[300px] overflow-auto">
        <div className="flex items-center gap-4 w-content h-full">
          <CreateBlog callList={handleCallList} />
          <Divider orientation="vertical" />
          <UpdateBlog
            id={selected?._id}
            callList={handleCallList}
            blogState={selectedBlog}
            disable={!selected || !selectedBlog.title}
          />
          <Divider orientation="vertical" />
          <DeleteBlog
            id={selected?._id}
            callList={handleCallList}
            disable={!selected || !selectedBlog.title}
          />
        </div>
      </div>
      <Divider className="my-4" />
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
        <TableBody items={data?.result?.data || []} emptyContent="No blogs">
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
            total={(getList.data?.result.total || 0) / 10 + 1}
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
