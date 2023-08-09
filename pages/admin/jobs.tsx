import { MainLayout } from '@/components/Admin'

import { JobTable } from '@/components/Admin/Job'
import { NextPageWithLayout } from '../_app'

const jobs: NextPageWithLayout = () => {
  return <JobTable />
}

jobs.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default jobs
