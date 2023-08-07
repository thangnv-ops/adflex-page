import '@reach/dialog/styles.css'
import 'aos/dist/aos.css'
import 'react-multi-carousel/lib/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/blog-detail.css'
import '../styles/globals.css'

import { ReactElement, ReactNode } from 'react'

import store from '@/redux/store'
import { NextUIProvider } from '@nextui-org/react'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Head>
        <title>AdFlex - Nền tảng Affiliate Marketing hàng đầu Đông Nam Á</title>
        <meta
          name="description"
          content="AdFlex là nền tảng Affiliate Marketing hàng đầu tại Đông Nam Á. Nhiệm vụ của chúng tôi là tạo ra giải pháp bán hàng tốt nhất, đột phá doanh thu lớn nhất cho các đối tác."
        />
        <meta
          property="og:title"
          content="Adflex.vn | AdFlex là nền tảng Affiliate Marketing hàng đầu tại Đông Nam Á."
        />
        <meta
          property="og:description"
          content="AdFlex là nền tảng Affiliate Marketing hàng đầu tại Đông Nam Á. Nhiệm vụ của chúng tôi là tạo ra giải pháp bán hàng tốt nhất, đột phá doanh thu lớn nhất cho các đối tác."
        />
        <meta property="og:image" content="/images/thumbnail.png" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/thumbnail.png" />
      </Head>

      <Provider store={store}>
        <ToastContainer autoClose={3000} position="top-center" style={{ zIndex: 1000000 }} />
        <CookiesProvider>
          <NextUIProvider>{getLayout(<Component {...pageProps} />)}</NextUIProvider>
        </CookiesProvider>
      </Provider>
    </>
  )
}

export default MyApp
