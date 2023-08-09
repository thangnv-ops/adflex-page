import Blog from '@/components/Blog/Blog'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from '../_app'

const index: NextPageWithLayout = () => {
  return <Blog />
}

index.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default index
