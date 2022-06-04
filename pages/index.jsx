import Footer from "../components/Footer";
import Link from "next/link";
import ScrollButton from "../components/ScrollButton"
import { useEffect } from "react";

require("../util/utils.js");

export default function Home() {
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
        <div id="space-intro" className="sketch-container full-w full-h fade-in" style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          justifyContent: "flex-start",
        }}
      >
        <div className="content content-top flex-v flex-centered-v-h" style={{flex: "1", minHeight: "calc(90vh - 13em)"}}>
          <img
            src="/img/logo_white.svg"
            style={{ width: "200px", height: "200px", margin: "2em" }}
          />
          <div className="markdown-body" style={{textAlign: "center"}}>
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
