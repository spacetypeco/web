import { DiagnosticCategory } from "typescript";
import Footer from "../components/Footer";
import Link from "next/link";
import ScrollButton from "../components/ScrollButton"
import { useEffect } from "react";

require("../util/utils.js");

const fadeOnScroll = (event) => {
  const referenceElement = document.querySelector("#space-intro")
  const navElement = document.querySelector(".logo-inner");
  const introElement = document.querySelector(".space-intro-logo-inner");

  if (!referenceElement) {
    return;
  }
  
  var distanceToTop = window.pageYOffset + referenceElement.getBoundingClientRect().top;

  let change = (window.innerHeight - distanceToTop) / (window.innerHeight * 0.5) - 1;
  change = Math.min(change, 1);
  change = Math.max(change, 0);

  navElement.style.transform = `translateY(${change * 150}%)`;
  navElement.style.transition = `transform ${(1-change)*0.5}s ease`;
  introElement.style.transform = `translateY(${(1 - change) * 100}%)`;
};

export default function Home() {
  useEffect(() => {
    fadeOnScroll();
    const element = document.querySelector("#sketches-container")
    element.addEventListener("scroll", fadeOnScroll);
    return () => element.removeEventListener("scroll", fadeOnScroll);
  }, []);
  
  return (
    <>
      <script  src="https://cdn.jsdelivr.net/npm/opentype.js@latest/dist/opentype.min.js" />
      <script  src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js" />
      <script  src="https://cdn.jsdelivr.net/gh/kyeah/p5@master/utils/text-utils.js" />
      <script src="js/p5.func.min.js"></script>

      <script  src="/js/matter-0_14_2.min.js" />
      <script  src="/js/sketches/blobs/point.js" />
      <script src="/js/sketches/blobs/sketch-generator.js" />
      <script  src="/js/sketches/particle-fill/sketch-generator.js" />
      <script  src="/js/sketches/shader-wag/sketch-generator.js" />

      <script  src="/js/sketches/vortex/sketch-generator.js" />
      <script  src="/js/sketches/path-tweaker/sketch-generator.js" />
    <script  src="/js/timer.js" strategy="afterInteractive" />
      <div className="hide-overflow full-w full-h">
    <div id="container" className="full-w full-h position-rel">
      <div id="sketches-container" className="full-w full-h position-abs">
        <div id="canvas" className="sketch-container full-w full-h">
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas2">
            <ScrollButton/>
          </a>
        </div>
        <div id="canvas2" className="sketch-container full-w full-h">
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas3">
            <ScrollButton />
          </a>
        </div>
        <div id="canvas3" className="sketch-container full-w full-h">
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas4">
          <ScrollButton />
          </a>
        </div>
        <div id="canvas4" className="sketch-container full-w full-h">
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#space-intro">
            <ScrollButton />
          </a>
        </div>
        <div id="space-intro" className="sketch-container full-w full-h" style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "flex-start",
        }}
      >
        <div className="content content-top flex-v flex-centered-v-h" style={{flex: "1", minHeight: "calc(90vh - 13em)"}}>
          <div className="overflow-y-hidden">
            <div className="space-intro-logo-inner">
          <img
            src="/img/logo_white.svg"
            style={{ width: "200px", height: "200px", paddingTop: "2em" }}
          />
          </div></div>
          <div className="markdown-body" style={{textAlign: "center", paddingTop: "2em"}}>
          <p>We work with individuals and organizations to express unique narratives and connect the seams between type design and digital interaction.</p>
          <Link href="/about"><a href="/about"><h1>→</h1></a></Link>
          </div></div>
        </div>
        <div style={{scrollSnapAlign:"end"}}>
        <Footer/>
        </div>

      </div>
    </div>
  </div>
    </>
  );
}
