import Head from "next/head";

/**
 * Adds back button navigation; clicking it will
 * begin a fade back to the main index.
 */
function BackNav() {
  return (
    <>
      <Head>
        <script src="js/fade.js"></script>
      </Head>

      <div id="nav" className="full-w">
        <div id="nav-area">
          <a href="/" className="fade-in link">
            back
          </a>
        </div>
      </div>
    </>
  );
}

export default BackNav;
