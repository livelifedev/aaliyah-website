import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaliyah Rubio</title>
        <meta
          name="description"
          content="Aaliyah Rubio - Holistic therapy positive psychology coach"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <div className={styles.heroCopy}>
          <h1>Aaliyah Rubio</h1>
          <p>Holistic Therapy</p>
          <p>Positive Psychology Coach</p>
        </div>
      </div>

      <div className={styles.marketCopy}>
        <p>
          <span style={{ marginRight: "4px" }}>&ldquo;</span>Align with your
          true potential, <br />
          be empowered to create a life full of abundance
          <span style={{ marginLeft: "4px" }}>&rdquo;</span>
        </p>
      </div>

      <div className={styles.missionCopy}>
        <p>
          My mission is to align people with their true potential and empower
          them to create a life full of abundance.
        </p>
      </div>
    </>
  );
}
