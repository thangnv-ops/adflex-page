import Home from '@/components/Home/Home'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from './_app'

const page: NextPageWithLayout = () => {
  return <Home />
}

page.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default page
