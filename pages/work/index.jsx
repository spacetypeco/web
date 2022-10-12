import Cursor from "../../components/Cursor";
import Head from "next/head";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import React from "react";
import Tile from "../../components/Tile";
import Video from "../../components/Video";
import createFiller2Sketch from "../../p5/sketches/filler2";
import createFiller3Sketch from "../../p5/sketches/filler3";
import createFillerSketch from "../../p5/sketches/filler1";
import createSketch from "../../p5/sketches/blobsBG";
import dynamic from "next/dynamic";
import useImageSizer from "../../hooks/useImageSizer";
import useLogo from "../../hooks/useLogo";
import useScrollReveal from "../../hooks/useScrollReveal";
import useSectionThemes from "../../hooks/useSectionThemes";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  {
    ssr: false,
  }
);

require("../../util/utils.js");

const GothicTitle = (txt, classes = "", pClasses="") => {
  return (
    <>
      <div className={classes} style={{ display: "grid" }}>
        <p
          className={`h1 label-accent note wipe-down-on-scroll-0 no-delay gothic-base title title--tall ${pClasses}`}
          style={{
            gridArea: "1 / 1",
            color: "var(--color-black)",
            animationDelay: "-0.1s",
          }}
        >
          {txt}
        </p>
        <p
          className={`h1 label-accent note wipe-down-on-scroll-0 no-delay gothic-layer-1 title title--tall ${pClasses}`}
          style={{
            gridArea: "1 / 1",
            color: "var(--color-title)",
            animationDelay: "-0.1s",
          }}
        >
          {txt}
        </p>
        <p
          className={`h1 label-accent note wipe-down-on-scroll-0 no-delay gothic-layer-2 title title--tall ${pClasses}`}
          style={{ gridArea: "1 / 1", color: "var(--color-white)", }}
        >
          {txt}
        </p>
      </div>
    </>
  );
};

function Works() {
  useLogo();
  useImageSizer();
  useScrollReveal();
  useSectionThemes();

  const sketch = createSketch("bg");
  const fillerSketch1 = createFillerSketch("filler-3");
  const fillerSketch2 = createFiller2Sketch("filler-2");
  const fillerSketch3 = createFiller3Sketch("filler-1");

  return (
    <>
      <Head>
        <title>Space Type - Work</title>
        <meta property="og:title" content="Space Type - Work" />
      </Head>
      <main>
        <Cursor />
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <div
              className="full-vw full-vh"
              style={{ position: "fixed" }}
              id="bg"
            >
              <ReactP5Wrapper sketch={sketch} />
            </div>
            <div className="fade-in content-top content-wide">
              <section data-theme="theme-light">
                {GothicTitle(
                  "We work across physical and digital media to build bridges between type and technology.", "", "title--tall-no-top-sm"
                )}
                <div className="project-grid project-grid--full-w">
                  <Tile w={6} h={4} title="Existential Co.">
                    <ProjectHoverLink
                      href="work/2022-existentialco"
                      title="Existential Co."
                    >
                      <Video datasrc="/works/2022-client-web-existential/cover" />
                    </ProjectHoverLink>
                  </Tile>
                  <div id="filler-1" className="tile rounded tile-w-2 tile-h-7 hide-sm wipe-down" style={{border: "3px solid var(--color-accent)"}}>
                    <ReactP5Wrapper sketch={fillerSketch3} />
                  </div>
                  <Tile w={4} h={4} title="Vartype">
                    <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                      <Video datasrc="/works/2022-tool-vartype/cover-sm" />
                    </ProjectHoverLink>
                  </Tile>
                  <Tile w={6} h={3} title="Panasonic: Make New">
                    <ProjectHoverLink
                      href="work/2022-panasonic-make-new"
                      title="Panasonic: Make New"
                    >
                      <Video datasrc="/works/2022-client-brand-panasonic/cover" />
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={4} title="36 Days of Type">
                    <ProjectHoverLink
                      href="work/2022-36-days-of-type"
                      title="36 Days of Type"
                    >
                      <div
                        className="project-grid project-grid--full-w"
                        style={{ padding: "revert", margin: "revert" }}
                      >
                        <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                          <Video src="/works/2022-insta-36daysoftype/S.mp4" />
                        </div>
                        <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                          <Video src="/works/2022-insta-36daysoftype/X-480p.mov" />
                        </div>

                        <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                          <Video src="/works/2022-insta-36daysoftype/5-480p.mov" />
                        </div>
                        <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                          <Video src="/works/2022-insta-36daysoftype/Z-500w.m4v" />
                        </div>
                      </div>
                    </ProjectHoverLink>
                  </Tile>

                  <div id="filler-2" className="tile rounded tile-w-8 tile-h-1 hide-sm  wipe-down" style={{opacity: 0.9, border: "3px solid var(--color-accent)"}}>
                    <ReactP5Wrapper sketch={fillerSketch2} />
                  </div>
                </div>
              </section>

              <section data-theme="dark-mode">
                {GothicTitle(
                  "Our work has been installed in public galleries, exhibitions, and open-air sites.",
                  "dark-mode"
                )}

                <div className="project-grid project-grid--full-w-24">
                  <Tile w={6} h={6} title="120 Broadway">
                    <ProjectHoverLink
                      href="work/2019-broadway-mural-project"
                      title="Broadway Mural Project"
                    >
                      <img
                        data-src="/works/2019-client-mural-broadway/wide-still"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={6} h={6} title="World Trade Center">
                    <ProjectHoverLink
                      href="work/world-trade-center"
                      title="World Trade Center"
                    >
                      <img data-src="/works/wtc/cover" data-fmt="jpg"></img>
                    </ProjectHoverLink>
                  </Tile>
                  <Tile w={4} h={5} title="Map of the U.S.">
                    <ProjectHoverLink
                      href="work/us-map"
                      title="Map of the United States"
                    >
                      <img
                        data-src="/works/us-map/us-map-cover"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>
                  <Tile w={4} h={5} title="London Review of Books">
                    <ProjectHoverLink
                      href="work/london-review-of-books"
                      title="London Review of Books"
                    >
                      <img
                        data-src="/works/london-review-of-books/cover"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>
                  <Tile w={4} h={5} title="SFPC - Comms">
                    <ProjectHoverLink
                      href="work/sfpc-communication"
                      title="Communication"
                    >
                      <img
                        data-src="/works/sfpc-communication/cover"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>
                </div>
              </section>
              <section data-theme="theme-light">
                {GothicTitle(
                  "We design custom typefaces and lettering to fit every occasion."
                )}

                <div className="project-grid project-grid--full-w-24">
                  <Tile w={6} h={8} title="Quick Brown Fox">
                    <ProjectHoverLink
                      href="work/quick-brown-fox"
                      title="Quick Brown Fox"
                    >
                      <img
                        data-src="/works/quick-brown-fox/cover"
                        data-fmt="png"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={6} h={8} title="Allida">
                    <ProjectHoverLink href="work/allida-imprint" title="Allida">
                      <img
                        data-src="/works/2022-allida/cover"
                        data-fmt="png"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>
                  <Tile w={4} h={11} title="Constant Typeface">
                    <ProjectHoverLink
                      href="work/constant-typeface"
                      title="Constant Typeface"
                    >
                      <img
                        data-src="/works/constant-typeface/constant-poster"
                        data-fmt="jpeg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={4} title="Hamilton Type — Etta">
                    <ProjectHoverLink
                      href="work/hamilton-etta"
                      title="Hamilton Type - Etta"
                    >
                      <img
                        data-src="/works/etta/Etta_Banners_01"
                        data-fmt="png"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={4} title="Hany's Fire Tonic">
                    <ProjectHoverLink
                      href="work/hanys-fire-tonic"
                      title="Hanys Fire Tonic"
                    >
                      <img
                        data-src="/works/2018-client-brand-hanys-harvest/mockup_wide"
                        data-fmt="png"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={9} title="7 Years of SFPC">
                    <ProjectHoverLink
                      href="work/sfpc-seven-years"
                      title="7 Years of SFPC"
                    >
                      <img
                        data-src="/works/2019-sfpc-poster/cover"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={5} title="Chance and Destiny" classNames="">
                    <ProjectHoverLink
                      href="work/chance-and-destiny"
                      title="Chance and Destiny"
                    >
                      <img
                        data-src="/works/chance-and-destiny/Chance_Destiny_Textura_Cutout_lr"
                        data-fmt="jpg"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={8} title="The Winter Garden">
                    <ProjectHoverLink
                      href="work/the-winter-garden"
                      title="The Winter Garden"
                    >
                      <img
                        data-src="/works/2022-winter-garden-cover/mockup-new"
                        data-fmt="png"
                      ></img>
                    </ProjectHoverLink>
                  </Tile>

                  <Tile w={4} h={6} title="Kiplingers Magazine">
                    <ProjectHoverLink
                      href="work/kiplingers"
                      title="Kiplingers Magazine"
                    >
                      <img
                        data-src="/works/kiplingers-cover"
                        data-fmt="jpg"
                        style={{ transform: "scale(110%)" }}
                      ></img>
                    </ProjectHoverLink>
                  </Tile>
                  <div id="filler-3" className="tile rounded tile-w-4 tile-h-4 hide-sm wipe-down" style={{opacity: 0.9, border: "3px solid var(--color-accent-2)"}}>
                   <ReactP5Wrapper sketch={fillerSketch1} />

                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Works.displayName = "Work";
export default Works;
