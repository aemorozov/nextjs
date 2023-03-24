import Heading from "@/components/Heading"
import styles from '../styles/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Heading tag="h1" text="Hello World!" />
    </div>
  )
}

export default Home