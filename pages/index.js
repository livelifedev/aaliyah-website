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
        <img src="/images/aaliyah-bg.jpg" alt="" />
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

      <div className={styles.missionWrapper}>
        <p className={styles.missionLeadCopy}>
          My mission is to align people with their true potential and empower
          them to create a life full of abundance.
        </p>
        <p className={styles.missionSecondaryCopy}>
          I take people on a journey inward awakening and bringing to awareness
          any self-limiting beliefs, fears, or past traumas that exist in the
          subconscious and deep within the unconscious mind. I teach people to
          accept and detach from these beliefs, fears and traumas allowing them
          to be free of personal limitations and have the ability to stop
          recreating the same outcomes in life.
        </p>

        <p className={styles.missionLinkWrapper}>
          <a>Get to know me</a>
        </p>
      </div>
    </>
  );
}
