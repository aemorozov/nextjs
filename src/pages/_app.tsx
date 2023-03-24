import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import youtubeImg from '../../public/youtube.png'
import Image from 'next/image'


const App = ({ Component, pageProps }: AppProps) => {
  return(
    <Layout>
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