import { MainLayout, UserTable } from '@/components/Admin'

import { NextPageWithLayout } from '../_app'

const users: NextPageWithLayout = () => {
  return <UserTable />
}

users.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default users
