import localFont from "@next/font/local";
import { Hammersmith_One, Poppins } from "@next/font/google";
import "../styles/globals.css";
import { Layout } from "../components/layout";

const breathing = localFont({
  src: "../fonts/Breathing.ttf",
});
const hammersmithOne = Hammersmith_One({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --primary-font: ${breathing.style.fontFamily}, sans-serif;
          --secondary-font: ${hammersmithOne.style.fontFamily}, sans-serif;
          --tertiary-font: ${poppins.style.fontFamily}, sans-serif;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
