import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <>
      <Head>
        <title>Aaliyah Rubio | About Me</title>
        <meta
          name="description"
          content="Aaliyah Rubio - Holistic therapy positive psychology coach"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div className={styles.mobileImageWrapper}>
          <img src="/images/aaliyah-portrait.jpg" alt="" />
        </div>

        <section>
          <div className={styles.title}>
            <h2>Hi,</h2>
            <p>I&apos;m Aaliyah</p>
          </div>
          <div className={styles.section}>
            <p>
              I&apos;m here to help you find your purpose and guide you to
              create the life you are born to live.
            </p>
            <p>I get it I&apos;ve been there...</p>
            <p>I...</p>
          </div>
        </section>

        <section className={styles.secondSection}>
          <img src="/images/aaliyah-portrait.jpg" alt="" />

          <div className={styles.qualifications}>
            <h3>Qualifications</h3>
            <ul>
              <li>Bachelor of Social Sciences (Psychology)</li>
              <li>Certificate IV in Community Services</li>
              <li>Certificate in Meditation Teaching</li>
              <li>Certificate in Holistic Human Development</li>
              <li>Certificate in Holistic Counselling</li>
              <li>Certificate in Holistic Life Coaching</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
