import { MainLayout } from '@/components/Admin'
import { BlogTable } from '@/components/Admin/Blog/BlogTable'
import { NextPageWithLayout } from '../_app'

const blogs: NextPageWithLayout = () => {
  return <BlogTable />
}

blogs.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>
}

export default blogs
