import BlogDetail from '@/components/Blog/BlogDetail'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from '../_app'

const index: NextPageWithLayout = () => {
  return <BlogDetail />
}

index.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default index
