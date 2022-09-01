import Cursor from "../../components/Cursor"
import Head from "next/head";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import Tile from "../../components/Tile"
import Video from "../../components/Video";
import useLogo from "../../hooks/useLogo";
import useScripts from "../../hooks/useScripts";
import useScrollReveal from "../../hooks/useScrollReveal";
import useVideoManager from "../../hooks/useVideoManager";
require("../../util/utils.js");

function Works() {
  useLogo();
  useVideoManager();
  useScrollReveal();

  const urls = [
  "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.0.0/p5.min.js",
  "https://cdn.jsdelivr.net/gh/kyeah/p5@master/utils/text-utils.js",
  "/js/sketches/blobs/point.js",
  "/js/sketches/blobs-bg/sketch-generator.js",
]
  
  useScripts(urls, 
    () => typeof(BlobsBg) !== "undefined",
    () => {
      const sketch = BlobsBg.createSketch("bg");
      const p5s = new p5(sketch, "bg");
      return () => p5s.remove();
    }, []);

  return (
    <>
      <Head>
        <title>Space Type - Work</title>
        <meta property="og:title" content="Space Type - Work" />
      </Head>
      <main>
        <Cursor/>
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <div className="full-vw full-vh" style={{position: "fixed"}} id="bg"></div>
            <div className="fade-in content-top content-wide">
              <h1 className="label-accent note text-outline wipe-down">We work across physical and digital media to build bridges between type and technology.</h1>
              <div className="project-grid project-grid--full-w">
                <Tile w={6} h={4} title="Existential Co.">
                  <ProjectHoverLink
                    href="work/2022-existentialco"
                    title="Existential Co."
                  >
                    <Video src="/works/2022-client-web-existential/cover.mov"/>
                    </ProjectHoverLink>
                  </Tile>
                <div className="tile rounded tile-w-2 tile-h-7 hide-sm  wipe-down" style={{backgroundColor: "var(--color-accent-2)"}}>
                </div>
                <Tile w={4} h={4} title="Vartype">
                  <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                    <Video src="/works/2022-tool-vartype/cover.mp4"/>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={3} title="Panasonic: Make New">
                  <ProjectHoverLink
                    href="work/2022-panasonic-make-new"
                    title="Panasonic: Make New"
                  >
                    <Video src="/works/2022-client-brand-panasonic/cover.mov"/>
                  </ProjectHoverLink>
                </Tile>
                
                <Tile w={4} h={4} title="36 Days of Type">
                  <ProjectHoverLink
                    href="work/2022-36-days-of-type"
                    title="36 Days of Type"
                  >
                    <div className="project-grid project-grid--full-w" style={{padding:"revert", margin:"revert"}}>
      
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/s5-2.mp4"/>
                      </div>
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/X.mp4"/>
                      </div>
                      
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/5.mov"/>
                      </div>
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/Z.mp4"/>
                      </div>
                                  </div>
                  </ProjectHoverLink>
                </Tile>

                <div className="tile rounded tile-w-8 tile-h-1 hide-sm  wipe-down" style={{backgroundColor: "var(--color-accent)"}}>
                </div>
  </div>

  <h1 className="label-accent note text-outline  wipe-down">
    Our work has been installed in public galleries, exhibitions, and open-air sites.
  </h1>
  
  <div className="project-grid project-grid--full-w" >
                <Tile w={6} h={3} title="120 Broadway">
                  <ProjectHoverLink
                    href="work/2019-broadway-mural-project"
                    title="Broadway Mural Project"
                  >
                    <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                
                <Tile w={6} h={3} title="World Trace Center">
                  <ProjectHoverLink href="work/wtc-mural" title="World Trade Center">
                    <img src="/works/wtc/cover.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={3} title="Map of the U.S.">
                  <ProjectHoverLink href="work/zapata" title="Map of the United States">
                    <img src="/works/us-map-cover.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={3} title="London Review of Books">
                  <ProjectHoverLink href="work/zapata" title="London Review of Books">
                    <img src="/works/london-review.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={3} title="Communication">
                  <ProjectHoverLink href="work/zapata" title="Communication">
                    <img src="/works/2018-sfpc-comms/cover.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                </div>

                <h1 className="label-accent note wipe-down text-outline">
                  We design custom typefaces and lettering to fit any occasion.
                </h1>
  <div className="project-grid project-grid--full-w">
    
                <Tile w={4} h={2} title="Hany's Harvest">
                  <ProjectHoverLink
                    href="work/2018-hanys-harvest-branding"
                    title="Hanys Harvest Branding"
                  >
                    <img src="/works/2018-client-brand-hanys-harvest/mockup_wide.png"></img>
                  </ProjectHoverLink>
                </Tile>

                <Tile w={4} h={2} title="Hamilton Type — Etta">
                  <ProjectHoverLink href="work/zapata" title="Hamilton Type - Etta">
                    <img src="/works/etta/Etta_Banners_01.png"></img>
                  </ProjectHoverLink>
                </Tile>
                
                {/* <div className="tile rounded tile-w-3 tile-h-3">
                  <ProjectHoverLink
                    href="work/2022-ampersandist"
                    title="Typeface: Ampersandist"
                  >
                    <img src="/works/2022-typeface-Ampersandist/large_Futurefonts_Samples-06.png"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-3 tile-h-3">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <Video src="/works/2022-insta-36daysoftype/u7-2.mp4"/>
                  </ProjectHoverLink>
                </div> */}
                <Tile w={4} h={6} title="Constant Typeface">
                  <ProjectHoverLink href="work/zapata" title="Constant Typeface">
                    <img src="/works/constant-poster.jpeg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={5} title="7 Years of SFPC">
                  <ProjectHoverLink href="work/zapata" title="7 Years of SFPC">
                    <img src="/works/2019-sfpc-poster/cover.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={5} title="The Winter Garden">
                  <ProjectHoverLink href="work/zapata" title="The Winter Garden">
                    <img src="/works/2022-winter-garden-cover/mockup.png"></img>
                  </ProjectHoverLink>
                </Tile>
                <div className="tile rounded tile-w-4 tile-h-1 hide-sm  wipe-down" style={{backgroundColor: "var(--color-accent-2)"}}>
                </div>
                <Tile w={6} h={4} title="Kiplingers">
                  <ProjectHoverLink href="work/zapata" title="Kiplingers">
                    <img src="/works/kiplingers-cover.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={4}>
                  <ProjectHoverLink href="work/allida" title="Allida Imprint">
                    <img src="/works/2022-allida/cover.png"></img>
                  </ProjectHoverLink>
                </Tile>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

Works.displayName = "Work";
export default Works;