import { UserReq, UserReqError } from '@/backend/service/user-service/user-req'

import { Input } from '@nextui-org/react'
import React from 'react'

interface IUserForm {
  setUser: (req: UserReq) => void
  user: UserReq
  error?: UserReqError
}

export const UserFrom = ({ user, setUser, error }: IUserForm) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.id]: e.target.value })
  }

  const validate = (field: string) => {
    return error && !!error[field] ? 'invalid' : 'valid'
  }

  return (
    <div className=" w-full gap-4 flex flex-col gap-4">
      <Input
        id="name"
        type="text"
        label="Name"
        placeholder="Enter name"
        isRequired
        validationState={validate('name')}
        errorMessage={error?.name}
        value={user.name}
        onChange={onChange}
      />
      <Input
        id="username"
        type="text"
        label="Username"
        placeholder="Enter username"
        isRequired
        validationState={validate('username')}
        errorMessage={error?.username}
        value={user.username}
        onChange={onChange}
      />
      <Input
        id="email"
        type="text"
        label="Email"
        placeholder="Enter email"
        isRequired
        validationState={validate('email')}
        errorMessage={error?.email}
        value={user.email}
        onChange={onChange}
      />
      <Input
        id="phone"
        type="text"
        label="Phone"
        placeholder="Enter phone"
        isRequired
        validationState={validate('phone')}
        errorMessage={error?.phone}
        value={user.phone}
        onChange={onChange}
      />
    </div>
  )
}
