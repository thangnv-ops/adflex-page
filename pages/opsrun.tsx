import Layout from '@/components/Layout'
import Opsrun from '@/components/Opsrun/Opsrun'
import { NextPageWithLayout } from './_app'

const opsrun: NextPageWithLayout = () => {
  return <Opsrun />
}

opsrun.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default opsrun
