import { useEffect, useRef } from "react";

import Head from "next/head";
import useLogo from "../hooks/useLogo";
import { useRouter } from "next/router";
import useVideoManager from "../hooks/useVideoManager";

export default function ProjectDetails({
  title,
  headerUrl,
  bgColor,
  intro,
  ...props
}) {
  useLogo();
  useVideoManager();
  const pageTitle = `Space Type - ${title}`;
  const titleSplit = [];
  let currentLine = [];

  title.split("").forEach((item, index) => {
    let ch = item.trim() ? item : "\u00A0";
    let animationDelay = `${index * 0.1}s`;

    currentLine.push(
      <span key={index} style={{ animationDelay }}>
        {ch}
      </span>
    );

    if (!item.trim()) {
      titleSplit.push(<div>{currentLine}</div>);
      currentLine = [];
    }
  });

  titleSplit.push(<div>{currentLine}</div>);
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

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
      </Head>
      <main
      // style={{
      //   backgroundColor: bgColor,
      // }}
      >
        <div className="project-details">
          <section
            className="width-1200 content content-top content-short-bottom"
            style={
              {
                // margin: "0 auto",
                // justifyContent: "center",
              }
            }
          >
            <div className="overflow-y-hidden">
              <a
                className="nav-back slide-up"
                onClick={() => {
                  router.query.fromWork ? router.back() : router.push("/work");
                }}
              >
                ← work
              </a>
            </div>
            <div
              className="side-text"
              style={{
                padding: "2em",
                paddingTop: "-2em",
                borderTop: "1px solid var(--color-white)",
                marginTop: "0.5em",
              }}
            >
              <h1 className="project-title" ref={titleRef}>
                {titleSplit}
              </h1>
              <div
                className="fade-in"
                style={{ animationDelay: "0.4s", animationDuration: "0.8s" }}
              >
                {intro}
              </div>
            </div>
            <div>{props.children}</div>
          </section>
        </div>
      </main>
    </>
  );
}