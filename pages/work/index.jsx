import Cursor from "../../components/Cursor"
import Head from "next/head";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import Tile from "../../components/Tile"
import Video from "../../components/Video";
import createSketch from "../../p5/sketches/blobsBG";
import dynamic from 'next/dynamic'
import useImageSizer from "../../hooks/useImageSizer";
import useLogo from "../../hooks/useLogo";
import useScrollReveal from "../../hooks/useScrollReveal";
import useVideoManager from "../../hooks/useVideoManager";
import useVideoSizer from "../../hooks/useVideoSizer";

const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper')
    .then(mod => mod.ReactP5Wrapper), {
    ssr: false
});

require("../../util/utils.js");


function Works() {
  useLogo();
  useVideoManager();
  useVideoSizer();
  useImageSizer();
  useScrollReveal();

  const sketch = createSketch("bg");

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
            <div className="full-vw full-vh" style={{position: "fixed"}} id="bg"><ReactP5Wrapper sketch={sketch} /></div>
            <div className="fade-in content-top content-wide">
              <h1 className="label-accent note text-outline wipe-down">We work across physical and digital media to build bridges between type and technology.</h1>
              <div className="project-grid project-grid--full-w">
                <Tile w={6} h={4} title="Existential Co.">
                  <ProjectHoverLink
                    href="work/2022-existentialco"
                    title="Existential Co."
                  >
                    <Video src="/works/2022-client-web-existential/cover-vlc-1600.m4v"/>
                    </ProjectHoverLink>
                  </Tile>
                <div className="tile rounded tile-w-2 tile-h-7 hide-sm  wipe-down bg-diag-1">
                </div>
                <Tile w={4} h={4} title="Vartype">
                  <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                    <Video datasrc="/works/2022-tool-vartype/cover-sm"/>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={6} h={3} title="Panasonic: Make New">
                  <ProjectHoverLink
                    href="work/2022-panasonic-make-new"
                    title="Panasonic: Make New"
                  >
                    <Video datasrc="/works/2022-client-brand-panasonic/cover"/>
                  </ProjectHoverLink>
                </Tile>
                
                <Tile w={4} h={4} title="36 Days of Type">
                  <ProjectHoverLink
                    href="work/2022-36-days-of-type"
                    title="36 Days of Type"
                  >
                    <div className="project-grid project-grid--full-w" style={{padding:"revert", margin:"revert"}}>
      
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/S-500w.m4v"/>
                      </div>
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/X-500w.m4v"/>
                      </div>
                      
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/5.mov"/>
                      </div>
                      <div className="tile no-squish tile-w-6 tile-h-2 wipe-down">
                        <Video src="/works/2022-insta-36daysoftype/Z-500w.m4v"/>
                      </div>
                                  </div>
                  </ProjectHoverLink>
                </Tile>

                <div className="tile rounded tile-w-8 tile-h-1 hide-sm  wipe-down bg-diag-2">
                </div>
  </div>

  <h1 className="label-accent note text-outline  wipe-down">
    Our work has been installed in public galleries, exhibitions, and open-air sites.
  </h1>
  
  <div className="project-grid project-grid--full-w-24" >
                <Tile w={6} h={8} title="120 Broadway">
                  <ProjectHoverLink
                    href="work/2019-broadway-mural-project"
                    title="Broadway Mural Project"
                  >
                    <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                
                <Tile w={6} h={8} title="World Trade Center">
                  <ProjectHoverLink href="work/world-trade-center" title="World Trade Center">
                    <img data-src="/works/wtc/cover" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={6} title="Map of the U.S.">
                  <ProjectHoverLink href="work/us-map" title="Map of the United States">
                    <img data-src="/works/us-map/us-map-cover" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={6} title="London Review of Books">
                  <ProjectHoverLink href="work/london-review-of-books" title="London Review of Books">
                    <img data-src="/works/london-review-of-books/cover" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={6} title="SFPC - Comms">
                  <ProjectHoverLink href="work/sfpc-communication" title="Communication">
                    <img data-src="/works/sfpc-communication/cover" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                </div>

                <h1 className="label-accent note wipe-down text-outline">
                  We design custom typefaces and lettering to fit any occasion.
                </h1>
  <div className="project-grid project-grid--full-w-24">
  <Tile w={6} h={9} title="Quick Brown Fox">
                  <ProjectHoverLink href="work/quick-brown-fox" title="Quick Brown Fox">
                    <img data-src="/works/quick-brown-fox/cover" data-fmt="png"></img>
                  </ProjectHoverLink>
                </Tile>
                
                <Tile w={6} h={9} title="Allida">
                  <ProjectHoverLink href="work/allida-imprint" title="Allida">
                    <img data-src="/works/2022-allida/cover" data-fmt="png"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={5} title="Hany's Fire Tonic">
                  <ProjectHoverLink
                    href="work/hanys-fire-tonic"
                    title="Hanys Fire Tonic"
                  >
                    <img data-src="/works/2018-client-brand-hanys-harvest/mockup_wide" data-fmt="png"></img>
                  </ProjectHoverLink>
                </Tile>

                <Tile w={4} h={5} title="Hamilton Type — Etta">
                  <ProjectHoverLink href="work/hamilton-etta" title="Hamilton Type - Etta">
                    <img data-src="/works/etta/Etta_Banners_01" data-fmt="png"></img>
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
                <Tile w={4} h={15} title="Constant Typeface">
                  <ProjectHoverLink href="work/constant-typeface" title="Constant Typeface">
                    <img data-src="/works/constant-typeface/constant-poster" data-fmt="jpeg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={12} title="7 Years of SFPC">
                  <ProjectHoverLink href="work/sfpc-seven-years" title="7 Years of SFPC">
                    <img data-src="/works/2019-sfpc-poster/cover" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                <Tile w={4} h={7} title="Chance and Destiny" classNames="">
                  <ProjectHoverLink href="work/chance-and-destiny" title="Chance and Destiny">
                  <img data-src="/works/chance-and-destiny/Textura_process" data-fmt="jpg"></img>
                  </ProjectHoverLink>
                </Tile>
                
                
                <Tile w={4} h={12} title="The Winter Garden">
                  <ProjectHoverLink href="work/the-winter-garden" title="The Winter Garden">
                    <img data-src="/works/2022-winter-garden-cover/mockup" data-fmt="png"></img>
                  </ProjectHoverLink>
                </Tile>
                <div className="tile rounded tile-w-4 tile-h-9 hide-sm wipe-down bg-diag-1">
                </div>

                <Tile w={4} h={7} title="Kiplingers Magazine">
                  <ProjectHoverLink href="work/kiplingers" title="Kiplingers Magazine">
                    <img data-src="/works/kiplingers-cover" data-fmt="jpg" style={{transform:"scale(110%)"}}></img>
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