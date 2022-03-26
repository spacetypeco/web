import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <>
      
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <script  src="https://cdn.jsdelivr.net/npm/opentype.js@latest/dist/opentype.min.js" />
      <script  src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js" />
      <script  src="https://cdn.jsdelivr.net/gh/kyeah/p5@master/utils/text-utils.js" />
      <script  src="js/matter-0_14_2.min.js" />

      <script  src="/js/sketches/blobs/point.js" />
      <script  src="/js/sketches/blobs/sketch-generator.js" />
      <script  src="/js/sketches/particle-fill/sketch-generator.js" />
      <script  src="/js/sketches/vortex/sketch-generator.js" />
      <script  src="/js/sketches/path-tweaker/sketch-generator.js" />
      <script  src="/js/timer.js" />
      </Head>
      <main className="full-w full-h">
        <div id="container" className="full-w full-h position-rel">
          <div id="canvas" className="full-w full-h"></div>
          <div id="nav" className="full-w full-h">
            <div id="nav-area">
              <div id="progress" className="fade-in"></div>
              <div id="nav-box">
                <div id="play-box">
                  <img
                    id="play"
                    href=""
                    className="fade-in"
                    src="img/pause.svg"
                    style={{ position: "absolute", width: "19.5px" }}
                  ></img>
                </div>
                <a id="about" href="/about" className="fade-in link">
                  about
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
