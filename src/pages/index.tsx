import Heading from "@/components/Heading"
import styles from '../styles/Home.module.scss'
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading tag="h1" text="Hello World!" />
      </div>
    </>
    
  )
}

export default Home