import { useEffect } from "react"
import { useRouter } from "next/router"
import Heading from "@/components/Heading"
import styles from '../styles/404.module.scss'
import Head from "next/head"

const Error = () => {
    const router = useRouter()
    const timeOut = 3000
    useEffect(() => {
      setTimeout(() => {
        router.push('/')
      }, timeOut)
    }, [router])
    
    return (
      <div className={styles.wrapper}>
        <div>
          <Head>
            <title>Error</title>
          </Head>
          <Heading tag="h1" text="404" />
          <Heading tag="h2" text="Something is going wrong... go to home page?" />
        </div>
      </div>
    ) 
  }
  
  export default Error