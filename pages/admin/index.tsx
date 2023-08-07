import { MainLayout } from '@/components/Admin'
import { NextPageWithLayout } from '../_app'

const admin: NextPageWithLayout = () => {
  return <>admin</>
}

admin.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default admin
