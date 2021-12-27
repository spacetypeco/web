/**
 * @file Defines the wrapping layout for all other pages.
 *
 * We add a shared stylesheet and set the charset here.
 */

import "../styles/app.css";

import Head from "next/head";

function App({ Component, pageProps }) {
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
