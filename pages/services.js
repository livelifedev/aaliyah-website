import Head from "next/head";
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
            <p>Become The Best You</p>
          </div>
          <div className={styles.section}>
            <h3>Services</h3>
            <ul>
              <li>
                <div>
                  <div>Initial Consultation</div>
                  <div>60-90 minutes</div>
                </div>
                <div className={styles.price}>$185</div>
              </li>
              <li>
                <div>
                  <div>Subsequent Sessions</div>
                  <div>60 minutes</div>
                </div>
                <span className={styles.price}>$160</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className={styles.title}>
            <h2>Align With Your</h2>
            <p>True Potential</p>
          </div>
          <div className={styles.section}>
            <h3>Programs</h3>
            <p>
              Each program is tailored specifically for the client and their
              needs.
            </p>
            <p>Fees dependant on individual client&apos;s program</p>
          </div>
        </section>
      </div>
    </>
  );
}
