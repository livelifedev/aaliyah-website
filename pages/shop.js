import Head from "next/head";
import { ProductBrowser } from "@ecwid/nextjs-ecwid-plugin";
import styles from "../styles/Shop.module.css";

export default function Store() {
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
        <ProductBrowser storeId="87830761" />
      </div>
    </>
  );
}
