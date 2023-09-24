import Head from "next/head";
import Link from "next/link";
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
              I&apos;m here to help you overcome emotional pain, heal from
              heartbreak and feelings of unworthiness, and rediscover the beauty
              and joy in life.
            </p>
            <p>I get it I&apos;ve been there.</p>
            <p>
              I have always struggled with the sense of belonging.
              <br /> I have lived in many cities around the world but always
              found myself in search of a new home, a place where I belong.
            </p>
            <p>
              I felt unfulfilled and lacked purpose,
              <br /> I attracted unhealthy relationships,
              <br /> I was continuously finding ways to escape my reality.
            </p>
            <p>
              My family went through many challenges during my childhood which
              consequently turned into emotional and psychological trauma.
              Traumatic events then followed me throughout my life, this
              resulted in depression, panic disorder, and anxiety disorder.
            </p>
            <p>
              I sought advice from various health professionals and ensured I
              implemented everything said. But I still found myself suffering
              from my past and wanting to escape the person I had become.
            </p>
            <p>
              My real journey began when I decided to try a different path to
              healing my mind and body. I began the journey of spirituality, and
              holistic and alternative methods.
              <br /> I worked with energy healers, light workers, and holistic
              therapists to detach from my past and overcome my suffering.
            </p>
            <p>
              I travelled to different countries where I would stay in ashrams
              to learn traditional meditation and yoga. I met with teachers,
              mentors, and alternative health practitioners around the world to
              learn new ways of healing and purifying the mind, body, and soul.
            </p>
            <p>And now I want to share them with you!</p>
            <p className={styles.marketCaption}>
              I CAN TEACH YOU THE TOOLS TO OVERCOME CHALLENGES AND EMOTIONAL
              SUFFERING.
            </p>
            <p className={styles.marketCaption}>
              I CAN EMPOWER YOU TO LET GO OF ANYTHING HOLDING YOU BACK FROM
              LIVING THE LIFE YOU WANT AND DESERVE.
            </p>
          </div>
          <div>
            <p className={styles.missionLinkWrapper}>
              <Link href="/contact">Work with me</Link>
            </p>
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
              <li>RYT 200 - Registered Yoga Teacher Training 200hrs</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
