import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

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
        <img src="/images/aaliyah-home.png" alt="" />
        <div className={styles.heroCopy}>
          <h1>Aaliyah Rubio</h1>
          <h2>Holistic Therapy</h2>
          <p className={styles.missionSecondaryCopy}>
            Guiding you on a transformative journey to release the past, embrace
            self-love and step into your worthiness.
          </p>
          <div className={styles.missionLinkWrapper}>
            <Link href="/about">Get to know me</Link>
          </div>
        </div>
      </div>

      <div className={styles.marketCopy}>
        <p>&ldquo;Endings are also beginnings&rdquo;</p>
      </div>

      <div className={styles.missionWrapper}>
        <p className={styles.missionSecondaryCopy}>
          Start your holistic journey of self-discovery. <br />
          Create lasting positive change and mental resilience.
        </p>

        <div className={styles.missionLinkWrapper}>
          <Link href="/about">Let me help you</Link>
        </div>
      </div>
    </>
  );
}
