import Head from "next/head";
import Navigation from "./Navigation";
import Script from "next/script";
import { useEffect } from "react";

const fadeOnScroll = (event) => {
  const element = document.getElementsByClassName("header")[0];
  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;

  let opacity = 1;
  opacity =
    1 +
    (distanceToTop + window.innerHeight * 0.25) / (window.innerHeight * 0.2);

  if (opacity >= 0) {
    element.style.opacity = opacity;
  } else {
    element.style.opacity = 0;
  }
};

export default function ProjectDetails({
  title,
  headerUrl,
  bgColor,
  intro,
  ...props
}) {
  const pageTitle = `Space Type - ${title}`;

  useEffect(() => {
    let s = () => console.log("scroll");
    if (typeof window !== "undefined") {
      console.log("attaching");
      document.querySelectorAll(".parallax").forEach((element) => {
        console.log(element);
        element.addEventListener("scroll", fadeOnScroll);
      });
    }
    return () => window.removeEventListener("scroll", s);
  }, []);

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
        <div className="parallax project-details">
          <div className="parallax__group">
            <section className="header full-vw full-vh-lg flex-centered parallax__layer parallax__layer--back">
              <div className="width-1200">
                <img src={headerUrl} className="full-w fade-out-on-scroll" />
              </div>
            </section>
          </div>
          <div className="parallax__group content">
            <section
              className="width-1200 content parallax__layer parallax__layer--base flex-v"
              style={{
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <div className="side-text">
                <h1>{title}</h1>
                {intro}
              </div>

              {props.children}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
