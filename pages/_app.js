/**
 * @file Defines the wrapping layout for all other pages.
 *
 * We add a shared stylesheet and set the charset here.
 */

import "../styles/app.css";

import Head from "next/head";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
