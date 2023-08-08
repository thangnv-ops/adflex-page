import { getEndpoint, userEndpoints } from '@/lib/endpoints'
import {
  Divider,
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

import { UserReq } from '@/backend/service/user-service/user-req'
import { UserRes } from '@/backend/service/user-service/user-res'
import { useApiCall } from '@/hooks/useCallApi'
import axios from 'axios'
import { CommonListResult } from 'common-abstract-fares-system'
import { toast } from 'react-toastify'
import { CreateUser } from './CreateUser'
import { UpdateUser } from './UpdateUser'

const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'username',
    label: 'USERNAME',
  },
  {
    key: 'phone',
    label: 'PHONE',
  },
  {
    key: 'email',
    label: 'EMAIL',
  },
]

export const UserTable = () => {
  const [selected, setSelected] = useState<UserRes | undefined>()
  const getList = useApiCall<CommonListResult<UserRes>, string>({
    callApi: () => axios.get(getEndpoint(userEndpoints, 'getList')),
    handleError(status, message) {
      toast.error(message)
    },
  })

  const { data } = getList

  const handleCallList = () => {
    getList.setLetCall(true)
  }

  useEffect(() => {
    handleCallList()
  }, [])

  const handleSelected = (keys: Selection) => {
    const id = Array.from(keys)[0]
    setSelected(data.result.data.find((item) => item._id === id))
  }

  const getSelectedReq = (): UserReq => {
    if (selected) {
      return {
        username: selected.username,
        name: selected.name,
        email: selected.email,
        phone: selected.phone,
      }
    }
    return {
      name: '',
      username: '',
      email: '',
      phone: '',
    }
  }

  const selectedUser = getSelectedReq()

  return (
    <>
      <div className="flex h-5 items-center space-x-4 text-small">
        <CreateUser callList={handleCallList} />
        <Divider orientation="vertical" />
        <UpdateUser
          id={selected?._id}
          callList={handleCallList}
          userState={selectedUser}
          disable={!selected || !selectedUser.email}
        />
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
        <TableBody items={data?.result?.data || []} emptyContent="No users">
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  )
}
