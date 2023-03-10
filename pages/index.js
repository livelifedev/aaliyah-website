import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aaliyah Rubio</title>
        <meta
          name="description"
          content="Aaliyah Rubio - Holistic Therapy Transformative Coaching"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.hero}>
        <img src="/images/aaliyah-bg.jpg" alt="" />
        <div className={styles.heroCopy}>
          <h1>Aaliyah Rubio</h1>
          <p>Holistic Therapy</p>
          <p>Transformative Coaching</p>
        </div>
      </div>

      <div className={styles.marketCopy}>
        <p>
          &ldquo;Align with your true potential, <br />
          be empowered to create a life full of abundance&rdquo;
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
          <Link href="/about">Get to know me</Link>
        </p>
      </div>
    </>
  );
}
