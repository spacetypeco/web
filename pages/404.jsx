import Head from "next/head";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Space Type - About</title>
        <meta property="og:title" content="Space Type - About" />
      </Head>
      <main>
          <div id="container" className="full-vw full-vh position-rel">
            <div id="about">
              <div className="fade-in content markdown-body">
                <p>We couldn't find a page at this address.</p>
                <p><a href="/">
            Go Home →</a></p>
              </div>
            </div>
          </div>
          </main>
    </>
  );
}
