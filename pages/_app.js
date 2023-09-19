import localFont from "@next/font/local";
import { Hammersmith_One, Poppins } from "@next/font/google";
import "../styles/globals.css";
import { Layout } from "../components/layout";

const breathing = localFont({
  src: "../fonts/Breathing.ttf",
});
const hammersmithOne = Hammersmith_One({ weight: "400", subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "600"],
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
      {/* <Layout>
        <Component {...pageProps} />
      </Layout> */}
      <div className="offline-page">
        <img
          alt=""
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEZklEQVR4nO2Z3U8cVRjG+SNMqqEaRPZ7d2aHhXbR0kI/CBQFut1qSSM3utKmCrGaNiq1RrCxJq2fOMYitFbYXaB8LbAU2KUUKLYUtOq1kCpXciUfyc4MPmbOlOkMFyZsxiEkc5Ln6kne53fOnPfNSSYlxVjGMtZ/rkh/bCESjUHS8F8pWy0vIheTpAmlnnmRrbqBwCtH//H5fDj31l6s/paF1V89EH7xYKZrLyoqKlBeXo4jR/yoO10A4R4DYYqBcNeNmdY8tf/2AfATNPhxCvwYhenm3Wr/zf3gY07ww07wQw5MX9ml8mur9yPRZ1/Y8AaKigpRWLAHD+ISuHDfg5V7HlSf8MPv96OsrBSHSovwxw0PARfuuLEyzqD6+GG1H2EIOH+LwnKMQlXlOr+dJuD8oANLfU5UvabwSwrxoMUFrte28S/h9e5A/QduAi78nAnhp0yEPt9HChcXH0RBwQE0nfcScOFHN4RJGqGL+Wq/dicB50dd4G+6ELyQp/bP7SDg3A0HuAE7gh/tUfmN72WDi9jA9Vg3voF9uSYs32UIuDCTiflYNg6VSoXz8/PwUlkOVsYlcOE2jfn+LHKia/6LpTnkxEVwfsSF+S5G7ZfkkBMXwbmoHX+GabX/ghdLHTZw3VZwXUlsIMraCLgwzeD+nVa0BK+Swrm5z0H8Ojcvuwk4ud8TNGpO7lb5I1/TBJyPO8kdrzmRq/LjnzkJONcvqaZyl+w3h9rQ39FAwLlOC7gOy8Y3IIKvNWd7uB61H39Kgj0eBm+87JLBxeYca/DIYMQ/9ghcbM4xllH5rx91yuBcnw1jX7hVPst+ia5rnxDwxHULpuq9SWzg4VRZHnfj8PPZpDBFOZHptmK20yVPlaUYBV/xOj/skKfKUp8DvoMKn7bg92s2As712rDYaYevKEvtN0jgiXYzFkNWBI4VJbGBh835zVk3KWy3W2AypePSKbM8VcTmZN+l1X6VSZ4qYnOypymVf/FkBgFfa072lEvtVz5DwBNtZiRazWg6k02+zsY3MEljrocGQ0uF09KegpfZTk58barMtbvUvns7OfG1qTLbbFf7dCoWxcbssZLmnG2ygaEUPpWKv4MSeCJswty3Vjy7k4HDkcQY5caphYDfjLS0J5Ga+gS2bXsM0UtmeaqIdzzgM6n8/gsZ8lQR73egLEPt16XLU0VszldL1vnvP03AEyFJx8usSE9Pgz3j8dWUZNeZd85CqaQLbVbeV2wDlNKEUs+86NAIooOPpAmlnnnx0dtQShNKPfMmJqeglCaUeuQFjOd0qfGcbjSe0zPGcxrGczpkPKctxnM6dTOf0x/WnYdSSRfarLymq81QShNKPfOG4reglCaUeuYNDI9CKU0o9czrHYhDKU0o9czr6h2EpCEiTSj1zGvvjkIpTSj1zAtd74VSmlDqmfdDuBtKaUKpZ96Vlg4opQmlnnmXv29Dg0KaUOqZx34XXGAbg2AbQ6L+99+srM55xjJWyhZf/wITPWNvcXwWjwAAAABJRU5ErkJggg=="
        />
        <h1>Temporarily Offline</h1>
      </div>
    </>
  );
}
