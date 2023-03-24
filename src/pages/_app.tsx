import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import youtubeImg from '../../public/youtube.png'
import Image from 'next/image'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      <Image 
        src={youtubeImg}
        width={500}
        height={350}
        alt='preview'
        placeholder="blur"
      />
    </Layout> )
}

export default App