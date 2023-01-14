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
            <p className="bold">
              All services are one to one and currently online only
            </p>
            <ol>
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
                <span className={styles.price}>$165</span>
              </li>
            </ol>
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

        <section className={styles.blockSection}>
          <h3>Transform.</h3>
          <div className={styles.section}>
            <p className={styles.sectionLead}>
              Break free from your old self and transform into who you are meant
              to be...
            </p>
            <p>
              The transform program is the most powerful program I offer. During
              this time, I will take you on a journey inward that will awaken
              you and align you to your true potential. We will bring to surface
              any past-traumas, fears, and self-limiting beliefs. We will then
              clear these past beliefs and conditioning to heal any
              emotional/physical wounds that prevent you from living your true
              potential.
            </p>
          </div>
        </section>

        <section className={styles.blockSection}>
          <h3>Heal After Heartbreak.</h3>
          <div className={styles.section}>
            <p className={styles.sectionLead}>
              Let go of heart break, disappointment, hopelessness, and
              rediscover yourself…
            </p>
            <p>
              Losing someone we really love is possibly one of the most painful
              experiences we can go through. This program is to help you
              rediscover who you are after experiencing a loss of a
              relationship.
            </p>
            <p>
              Throughout this healing journey you will learn to forgive, accept,
              and let go of what you thought was meant to be. We will identify
              your strengths and redirect your focus to meeting your needs,
              enabling you to move forward and attracting the life you long for
              and deserve.
            </p>
          </div>
        </section>

        <section className={styles.blockSection}>
          <h3>Evolve.</h3>
          <div className={styles.section}>
            <p className={styles.sectionLead}>
              Overcome a specific barrier that prevents you from success...
            </p>
            <p>
              The Evolve coaching program is designed to shift your mindset and
              build confidence in the decisions you make and the actions you
              take.
            </p>
            <p>Are you struggling with a specific area in your life?</p>
            <ul>
              <li>Career or finding purpose</li>
              <li>Stress Management</li>
              <li>Developing new and positive habits</li>
              <li>Communication</li>
              <li>Confidence</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
