import Head from "next/head";
import Navigation from "./Navigation";
import { callbackify } from "util";

export default function ProjectDetails({
  title,
  headerUrl,
  bgColor,
  intro,
  ...props
}) {
  const pageTitle = `Space Type - ${title}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <Navigation active="/work" positionAbsolute={true} />
      <main
        style={{
          backgroundColor: bgColor,
        }}
      >
        <div className="parallax">
          <div className="parallax__group">
            <section className="full-vw full-vh-lg flex-centered parallax__layer parallax__layer--back">
              <div className="width-1200">
                <img src={headerUrl} className="full-w" />
              </div>
            </section>
          </div>
          <div
            className="parallax__group"
            style={{
              backgroundColor: bgColor,
            }}
          >
            <section
              className="width-1200 content parallax__layer parallax__layer--base"
              style={{
                margin: "0 auto",
              }}
            >
              <div className="side-text">
                <h1>{title}</h1>
                {intro}
              </div>
            </section>
          </div>
        </div>
        {props.children}
      </main>
    </>
  );
}
