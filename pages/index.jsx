import Head from "next/head";
import ScrollButton from "../components/ScrollButton"
require("../util/utils.js");

const scrollButton = require('../components/ScrollButton.tsx');

let loaded = 0;

export default function Home() {
  return (
    <>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" type="text/css" href="/css/style.css" />
      </Head>
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
        <div id="canvas4" className="sketch-container full-w full-h"></div>
      </div>
      <div className="flex-h flex-end nav full-w full-h">
        <div className="flex-v flex-between full-h controls">
          <div id="nav-area">
            <div id="nav-box">
              <a href="/type" className="fade-in link">Type Foundry</a>
              <a href="/teaching" className="fade-in link">Teaching</a>
              <a href="/about" className="fade-in link">About</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
}
