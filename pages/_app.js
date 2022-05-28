/**
 * @file Defines the wrapping layout for all other pages.
 *
 * We add a shared stylesheet and set the charset here.
 */

import "../styles/app.css";

import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Space Type</title>
        <meta
          name="description"
          content="Space Type is an NYC-based studio practice operating at the intersection of type and technology."
        />
        <meta property="og:title" content="Space Type" />
        <meta
          property="og:description"
          content="Space Type is an NYC-based studio practice operating at the intersection of type and technology."
        />
        <meta property="og:url" content="https://www.spacetypeco.com" />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://spacetypeco.com/social_image.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:creator" content="@spacetypeco" />
        <meta
          property="twitter:image"
          content="https://spacetypeco.com/social_image.png"
        />
        <meta property="twitter:image:alt" content="Space Type logo" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" type="text/css" href="/css/style.css" />
        <meta charSet="utf-8" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5BBAD5" />
        <meta name="msapplication-TileColor" content="#DA532C" />
        <meta name="theme-color" content="#FFFFFF" />
        <Script src="/js/video-perf-check.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
