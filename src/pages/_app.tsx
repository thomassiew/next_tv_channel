import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Astro Coding Challenge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Astro Coding Challenge" />
        <meta
          name="description"
          content="This is a coding challenge by Astro"
        />
        <link
          rel="icon"
          href="https://static02.astro.com.my/astro/media/astromain/packagepromotion/astro_share_1.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
