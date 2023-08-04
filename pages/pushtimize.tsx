import Layout from '@/components/Layout'
import Pushtimize from '@/components/Pushtimize/Pushtimize'
import { NextPageWithLayout } from './_app'

const pushtimize: NextPageWithLayout = () => {
  return <Pushtimize />
}

pushtimize.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default pushtimize
