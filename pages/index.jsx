import Footer from "../components/Footer";
import Link from "next/link";
import ScrollButton from "../components/ScrollButton"
import { useEffect } from "react";
import useScripts from "../hooks/useScripts";

require("../util/utils.js");

const fadeOnScroll = (event) => {
  const referenceElement = document.querySelector("#space-intro")
  const navElement = document.querySelector(".logo-inner");
  const introElement = document.querySelector(".space-intro-logo-inner");

  if (!referenceElement) {
    return;
  }
  
  var distanceToBottom = window.pageYOffset + referenceElement.getBoundingClientRect().top - (window.innerHeight - referenceElement.offsetHeight);

  let change = (window.innerHeight - distanceToBottom) / (window.innerHeight * 0.5) - 1;
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

  const urls = ["https://cdn.jsdelivr.net/npm/opentype.js@latest/dist/opentype.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js",
  "https://cdn.jsdelivr.net/gh/kyeah/p5@master/utils/text-utils.js",
  "js/p5.func.min.js",
  "/js/matter-0_14_2.min.js",
  "/js/sketches/blobs/point.js",
  "/js/sketches/blobs/sketch-generator.js",
  "/js/sketches/particle-fill/sketch-generator.js",
  "/js/sketches/shader-wag/sketch-generator.js",
  "/js/sketches/vortex/sketch-generator.js",
  "/js/sketches/path-tweaker/sketch-generator.js"
]
  
  useScripts(urls, 
    () => typeof(Blobs) !== "undefined",
    () => {
    let sketches = [Blobs, ShaderWag, ParticleFill, PathTweaker];
    let sketch1 = sketches[0].createSketch("canvas");
    let createdSketches = []
    createdSketches.push(new p5(sketch1, "canvas"));
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.platform);

  
    if (!isMobile) {
      let sketch2 = sketches[1].createSketch("canvas2");
      createdSketches.push(new p5(sketch2, "canvas2"));
      let sketch3 = sketches[2].createSketch("canvas3");
      createdSketches.push(new p5(sketch3, "canvas3"));
      let sketch4 = sketches[3].createSketch("canvas4");
      createdSketches.push(new p5(sketch4, "canvas4"));
    } else {
      for (let elemName of ["canvas2", "canvas3", "canvas4"]) {
        let elem = document.getElementById(elemName);
        elem.style.display = "none";
      }
  
      document.querySelector("#canvas > a").style.display = "none";
    }

    document.querySelectorAll(".ct-btn-scroll").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("dest")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });

    return () => {
      createdSketches.forEach(sketch => sketch.remove());
    }
  }, [])
  
  return (
    <>
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
          minHeight: "100%",
          justifyContent: "flex-start",
        }}
      >
        <div className="content content-top flex-v flex-centered-v-h flex-centered-v-v" style={{flex: "1", minHeight: "calc(90%)"}}>
          <div className="overflow-y-hidden">
            <div className="space-intro-logo-inner">
          <img
            src="/img/logo_white.svg"
            style={{ width: "200px", height: "200px", paddingTop: "2em" }}
          />
          </div></div>
          <div className="markdown-body" style={{textAlign: "center", paddingTop: "2em"}}>
          <p>We work with individuals and organizations to express unique narratives and connect the seams between type design and digital interaction.</p>
          <Link href="/about"><a href="/about"><h4>Learn more →</h4></a></Link>
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