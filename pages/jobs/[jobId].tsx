import JobDetails from '@/components/Jobs/JobDetails'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from '../_app'

const jobDetail: NextPageWithLayout = () => {
  return <JobDetails />
}

jobDetail.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default jobDetail
