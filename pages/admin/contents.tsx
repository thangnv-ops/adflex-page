import { MainLayout } from '@/components/Admin'
import { ContentTable } from '@/components/Admin/Content/ContentTable'
import { NextPageWithLayout } from '../_app'

const contents: NextPageWithLayout = () => {
  return <ContentTable />
}

contents.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default contents
