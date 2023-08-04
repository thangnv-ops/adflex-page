import Jobs from '@/components/Jobs/Jobs'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from '../_app'

const jobs: NextPageWithLayout = () => {
  return <Jobs />
}

jobs.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default jobs
