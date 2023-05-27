import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Services.module.css";

export default function Services() {
  return (
    <>
      <Head>
        <title>Aaliyah Rubio | Services</title>
        <meta
          name="description"
          content="Aaliyah Rubio - Holistic therapy positive psychology coach"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <section>
          <div className={styles.title}>
            <h2>Are You Ready?</h2>
          </div>
          <div className={styles.section}>
            <div className={styles.title}>
              <p>Become The Best Version You</p>
            </div>
            <p className="bold">All services are currently online only</p>
            <ol>
              <li>
                <div>
                  <div>Initial Consultation</div>
                  <div>60-90 minutes</div>
                </div>
                <div className={styles.price}>$185aud</div>
              </li>
              <li>
                <div>
                  <div>Subsequent Sessions</div>
                  <div>60 minutes</div>
                </div>
                <span className={styles.price}>$165aud</span>
              </li>
            </ol>

            <div className={styles.title}>
              <p>Packages and Programs</p>
            </div>
            <p className="bold">
              Fees dependant on individual client&apos;s needs.
            </p>

            <p>
              Are you tires of the lingering pain of a heartbreak? <br />
              Does each day feel like an exhausting battle, leaving you drained
              and lacking the energy to move forward? <br />
              Do you find yourself holding back from opportunities because you
              doubt your own worthiness?
            </p>

            <p>
              If you&apos;re trapped in a cycle of emotional pain, longing to
              overcome your past and reclaim your inner strength, then my
              tailored package or program is exactly what you need. Through
              compassionate guidance and dedicated suppport, I will help you
              break free from the grips of suffering, ignite your inner
              strength, and nurture a path of healing and growth.
            </p>

            <div className={styles.missionLinkWrapper}>
              <Link href="/contact">Start your journey</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
