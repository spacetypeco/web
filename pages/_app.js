/**
 * @file Defines the wrapping layout for all other pages.
 *
 * We add a shared stylesheet and set the charset here.
 */

import "../styles/animations.css";
import "../styles/app.scss";
import "../styles/svg.css";

import Footer from "../components/Footer";
import Head from "next/head";
import MouseContextProvider from "../hooks/context/MouseContext";
import Navigation from "../components/Navigation";
import { useRouter } from "next/router";
import { useState } from "react";

function App({ Component, pageProps }) {
  const router = useRouter();

  const inWork = router.pathname.match(/\/work.*$/);

  let theme = inWork ? "theme-light" : "";
  let globalClassNames = `${theme}`;

  if (Component.displayName == "Home") {
    globalClassNames += " full-w full-h";
  }

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
        <link rel="stylesheet" type="text/css" href="/css/footer.css" />

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
      </Head>
      <div
        id="component-container"
        className={globalClassNames}
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "flex-start",
          backgroundColor: "var(--color-black)",
          transition: "background-color 0.25s",
        }}
      >
        <Navigation activeComponentName={Component.name} />
        <MouseContextProvider>
          <Component {...pageProps} />
        </MouseContextProvider>
        {Component.displayName !== "Home" && <Footer />}
      </div>
      <div id="p5_loading" style={{ display: "none" }} />
    </>
  );
}

export default App;
