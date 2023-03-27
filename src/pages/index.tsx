import Heading from "@/components/Heading"
import styles from '../styles/Home.module.scss'
import Head from "next/head"
import youtubeImg from '../../public/youtube.png'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading tag="h1" text="Hello World!" />
        <Image 
          src={youtubeImg}
          width={500}
          height={300}
          className='image'
          alt='preview'
          placeholder="blur"
        />
      </div>
      
    </>
    
  )
}

export default Home