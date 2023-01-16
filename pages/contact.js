import Head from "next/head";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Aaliyah Rubio | Contact</title>
        <meta
          name="description"
          content="Aaliyah Rubio - Holistic therapy positive psychology coach"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <div>
          <div className={styles.title}>
            <h2>Let&apos;s Connect</h2>
            <p>Want to know more?</p>
            <p>Send a message or</p>
            <p>Book a complimentary call</p>
          </div>
          <div className={styles.section}>
            <form action="mailto:aaliyah.r1990@gmail.com" method="GET">
              <input
                type="text"
                placeholder="ENTER FULL NAME"
                name="subject"
                required
              />
              <input
                type="email"
                placeholder="ENTER EMAIL"
                name="email"
                required
              />
              <input
                type="text"
                placeholder="ENTER PHONE NUMBER"
                name="phone"
                required
              />
              <input
                type="text"
                placeholder="PREFERRED CONTACT METHOD"
                name="contact"
                required
              />
              <textarea rows="8" placeholder="MESSAGE" name="body" required />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
