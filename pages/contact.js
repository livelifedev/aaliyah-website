import { useReducer } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

const INITIAL_STATE = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  contact: "",
  status: "IDLE",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateFieldValue":
      return { ...state, [action.field]: action.value };

    case "updateStatus":
      return { ...state, status: action.status };

    case "reset":
    default:
      return INITIAL_STATE;
  }
};

export default function Contact() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const updateFieldValue = (field) => (event) => {
    dispatch({
      type: "updateFieldValue",
      field,
      value: event.target.value,
    });
  };

  console.log({ SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID });

  const setStatus = (status) => dispatch({ type: "updateStatus", status });

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("PENDING");

    // fetch("/api/email", {
    //   method: "POST",
    //   body: JSON.stringify(state),
    // })
    //   .then((res) => {
    //     if (!res.ok) throw new Error(res.status);
    //     setStatus("SUCCESS");
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //     setStatus("ERROR");
    //   });

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        state,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("SUCCESS");
          dispatch({ type: "reset" });
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("ERROR");
        }
      );
  };

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
            {state.status == "SUCCESS" && (
              <>
                <p>Message Sent!</p>
              </>
            )}
            {state.status == "ERROR" && (
              <>
                <p>Something went wrong. Please try again.</p>
              </>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="ENTER FULL NAME"
                name="fullName"
                required
                value={state.fullName}
                onChange={updateFieldValue("fullName")}
              />
              <input
                type="text"
                placeholder="ENTER EMAIL"
                name="email"
                required
                value={state.email}
                onChange={updateFieldValue("email")}
              />
              <input
                type="text"
                placeholder="ENTER PHONE NUMBER"
                name="phone"
                required
                value={state.phone}
                onChange={updateFieldValue("phone")}
              />
              <input
                type="text"
                placeholder="PREFERRED CONTACT METHOD"
                name="contact"
                value={state.contact}
                onChange={updateFieldValue("contact")}
              />
              <textarea
                rows="8"
                placeholder="MESSAGE"
                name="message"
                required
                value={state.message}
                onChange={updateFieldValue("message")}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
