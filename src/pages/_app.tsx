import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import Head from 'next/head'
import '@/styles/Image.scss'

const App = ({ Component, pageProps }: AppProps) => {
  return(
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout> )
}

export default App