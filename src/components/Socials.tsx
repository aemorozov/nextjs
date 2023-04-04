import Head from "next/head";
import styles from "../styles/Socials.module.scss";
import { socialsType } from "@/types";
import { FC } from "react";

type socialsTypeProps = {
  socials: Array<socialsType>;
};

const Socials: FC<socialsTypeProps> = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
        />
      </Head>
      <ul className={styles.socials}>
        {socials &&
          socials.map(({ id, icon, path }) => {
            return (
              <li key={id}>
                <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`fab fa-${icon}`}
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Socials;
