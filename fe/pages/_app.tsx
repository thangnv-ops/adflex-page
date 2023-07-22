import store from '@/redux/store'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import '../styles/globals.css'
import '../styles/blog-detail.css'

import 'react-toastify/dist/ReactToastify.css'
import '@reach/dialog/styles.css'
import 'react-multi-carousel/lib/styles.css'
import 'aos/dist/aos.css'

import Head from 'next/head'

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
        <meta property="og:title" content="Fungib.ly | Your One-Stop Marketplace for NFT Games" />
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
        <CookiesProvider>{getLayout(<Component {...pageProps} />)}</CookiesProvider>
      </Provider>
    </>
  )
}

export default MyApp
