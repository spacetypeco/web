import { useEffect, useRef } from "react";

import Head from "next/head";
import Navigation from "./Navigation";
import Script from "next/script";

const fadeOnScroll = () => {
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
    fadeOnScroll();
    document.querySelectorAll(".parallax").forEach((element) => {
      element.addEventListener("scroll", fadeOnScroll);
    });

    return () => window.removeEventListener("scroll", fadeOnScroll);
  }, []);

  const titleSplit = title.split("").map((item, index) => {
    let ch = item.trim() ? item : "\u00A0";
    let animationDelay = `${index * 0.1}s`;
    return (
      <span key={index} style={{ animationDelay }}>
        {ch}
      </span>
    );
  });

  const titleAnimationDelay = 0.1 * title.length;
  const introDelay = `${titleAnimationDelay + 0.5}s`;
  const contentDelay = `${titleAnimationDelay + 1.0}s`;

  const titleRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          document.querySelectorAll(".project-title span").forEach((el) => {
            el.classList.add("slide-down");
          });
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(titleRef.current);
  }, [titleRef.current]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },

      { threshold: 1 }
    );

    document.querySelectorAll(".slide-up-on-scroll-1").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
          }
        });
      },

      { threshold: 0.25 }
    );

    document.querySelectorAll(".slide-up-on-scroll-1-4").forEach((el) => {
      observer.observe(el);
    });
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
          <div className="parallax__group">
            <section
              className="width-1200 content parallax__layer parallax__layer--base flex-v"
              style={{
                margin: "0 auto",
                justifyContent: "center",
              }}
            >
              <div className="side-text">
                <h1 className="project-title" ref={titleRef}>
                  {titleSplit}
                </h1>
                <div
                  className="slide-up-on-scroll-1"
                  style={{ animationDelay: "0.5s", animationDuration: "0.8s" }}
                >
                  {intro}
                </div>
              </div>

              <div
                className="slide-up-on-scroll-1-4"
                style={{ animationDelay: "0.5s", animationDuration: "0.8s" }}
              >
                {props.children}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
