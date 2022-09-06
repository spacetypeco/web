import { useEffect, useRef } from "react";

import Head from "next/head";
import useImageSizer from "../hooks/useImageSizer";
import useLogo from "../hooks/useLogo";
import { useRouter } from "next/router";
import useVideoSizer from "../hooks/useVideoSizer";

export default function ProjectDetails({ title, bgColor, intro, ...props }) {
  useLogo();
  useVideoSizer();
  useImageSizer();

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
          entry.target.querySelectorAll("span").forEach((el) => {
            el.classList.add("slide-down");
          });
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(titleRef.current);
  }, [titleRef.current]);

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
