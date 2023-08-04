import Contact from '@/components/Contact/Contact'
import Layout from '@/components/Layout'
import { NextPageWithLayout } from './_app'

const contact: NextPageWithLayout = () => {
  return <Contact />
}

contact.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default contact
