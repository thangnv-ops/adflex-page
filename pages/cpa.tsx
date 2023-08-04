import CPA from '@/components/CPA/CPA'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from './_app'

const cpa: NextPageWithLayout = () => {
  return <CPA />
}

cpa.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default cpa
