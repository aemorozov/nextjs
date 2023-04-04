import Heading from "@/components/Heading";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import youtubeImg from "../../public/youtube.png";
import Image from "next/image";
import Socials from "@/components/Socials";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { socials: data },
  };
};

const Home = (socials) => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className={styles.wrapper}>
        <Heading
          tag="h1"
          text="Hello World!"
        />
        <Socials socials={socials.socials} />
        <Image
          src={youtubeImg}
          width={500}
          height={300}
          className="image"
          alt="preview"
          placeholder="blur"
        />
      </div>
    </>
  );
};

export default Home;
