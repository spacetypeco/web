import FontRow from "../components/FontRow";
import Head from "next/head";

export default function Type() {
  return (
    <>
      <Head>
        <title>Space Type - Typefaces</title>
        <meta property="og:title" content="Space Type - Typefaces" />
      </Head>
  <main>
    <div id="container" className="full-w full-h position-rel">

      <div id="about">
      <div className="content">
        <div className="flex-v full-w typetester-content-container">
          <FontRow label="Ampersandist Light" classes="fade-in"/>
          <hr/>
          <FontRow label="Ampersandist Medium" classes="fade-in delay-1"/>
          <hr className="fade-in delay-1"/>
          <FontRow label="Ampersandist Black" classes="fade-in delay-2"/>
          <hr className="fade-in delay-2"/>
          <span className="fade-in and-more delay-3">& ... more coming soon!</span>
        </div>
      </div>
      </div>
    </div>
  </main>
  </>
);
    
}