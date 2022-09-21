import Footer from "../components/Footer";
import Link from "next/link";
import LogoWhite from "../public/img/logo_white.svg"
import ScrollButton from "../components/ScrollButton"
import createBlobs from "../p5/sketches/blobs"
import createParticleFill from "../p5/sketches/particleFill"
import createPathTweaker from "../p5/sketches/pathTweaker";
import createShaderWag from "../p5/sketches/shaderWag";
import dynamic from 'next/dynamic'
import { useEffect } from "react";

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper')
    .then(mod => mod.ReactP5Wrapper), {
    ssr: false
});

require("../util/utils.js");

const fadeOnScroll = (event) => {
  const referenceElement = document.querySelector("#space-intro")
  const navElement = document.querySelector(".hide-sm .logo-inner");
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

function Home() {
  useEffect(() => {
    fadeOnScroll();
    const element = document.querySelector("#sketches-container")
    element.addEventListener("scroll", fadeOnScroll);
    return () => element.removeEventListener("scroll", fadeOnScroll);
  }, []);

  const blobsSketch = createBlobs("canvas");
  const shaderWagSketch = createShaderWag("canvas2");
  const particleFillSketch = createParticleFill("canvas3");
  const pathTweakerSketch = createPathTweaker("canvas4");
  
  useEffect(() => {
    document.querySelectorAll(".ct-btn-scroll").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("dest")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, [])
  
  return (
    <>
      <div className="hide-overflow full-w full-h">
    <div id="container" className="full-w full-h position-rel">
      <div id="sketches-container" className="full-w full-h position-abs">        
        <div id="canvas" className="sketch-container full-w full-h">
          <div id="p5_loading" style={{ display: "none" }} />
          <ReactP5Wrapper sketch={blobsSketch}/>

          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas2">
            <ScrollButton/>
          </a>
        </div>
        <div id="canvas2" className="sketch-container full-w full-h">
          <ReactP5Wrapper sketch={shaderWagSketch}/>
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas3">
            <ScrollButton />
          </a>
        </div>
        <div id="canvas3" className="sketch-container full-w full-h">
          <ReactP5Wrapper sketch={particleFillSketch}/>
          <a className="ct-btn-scroll ct-js-btn-scroll" dest="#canvas4">
          <ScrollButton />
          </a>
        </div>
        <div id="canvas4" className="sketch-container full-w full-h">
          <ReactP5Wrapper sketch={pathTweakerSketch}/>
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
        <div className="flex-v flex-centered flex-centered-v-h" style={{flex: "1", minHeight: "calc(90vh - 13em)"}}>
          <div className="overflow-y-hidden">
            <div className="space-intro-logo-inner">
          <LogoWhite
            style={{ width: "200px", height: "200px", paddingTop: "2em" }}
          />
          </div></div>
          <div className="markdown-body" style={{textAlign: "center", paddingTop: "2em"}}>
          <p>We work with individuals and organizations to express unique narratives and connect the seams between type design and digital interaction.</p>
          <div className="flex-h flex-centered flex-centered-v-h" style={{ gap: "2em" }}>
          <Link href="/work"><a href="/work"><p className="button-lg">See our work →</p></a></Link>
          <Link href="/about"><a href="/about"><p className="button-lg">Read about us →</p></a></Link>
          </div>
          </div></div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>
    </>
  );
}

Home.displayName = "Home";
export default Home;