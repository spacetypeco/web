import Head from "next/head";
import Navigation from "../../components/Navigation";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import Video from "../../components/Video";
import useLogo from "../../hooks/useLogo";
import useScrollReveal from "../../hooks/useScrollReveal";
import useVideoManager from "../../hooks/useVideoManager";

function Works() {
  useLogo();
  useVideoManager();
  useScrollReveal();
  
  return (
    <>
      <Head>
        <title>Space Type - Work</title>
        <meta property="og:title" content="Space Type - Work" />
      </Head>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <div className="fade-in content-top content-wide">
              <p className="label-accent note slide-up" style={{ animationDelay: "0.5s", animationDuration: "1s" }}>We work across physical and digital media to build bridges between type and technology.</p>
              <div className="project-grid project-grid--full-w slide-up" style={{ animationDelay: "1.5s", animationDuration: "1s" }}>
                <div className="tile rounded tile-w-6 tile-h-4">
                  <ProjectHoverLink
                    href="work/2022-existentialco"
                    title="Existential Co."
                  >
                    <Video src="/works/2022-client-web-existential/cover.mov"/>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-2 tile-h-7 hide-sm" style={{backgroundColor: "red"}}>
                  
                </div>
                
                
                

                <div className="tile rounded tile-w-4 tile-h-4">
                  <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                    <Video src="/works/2022-tool-vartype/cover.mp4"/>
                  </ProjectHoverLink>
                </div>

                
                

                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink
                    href="work/2022-panasonic-make-new"
                    title="Panasonic: Make New"
                  >
                    <Video src="/works/2022-client-brand-panasonic/cover.mov"/>
                  </ProjectHoverLink>
                </div>
                
                <div className="tile rounded tile-w-4 tile-h-4">
                  <ProjectHoverLink
                    href="work/2022-36-days-of-type"
                    title="36 Days of Type"
                  >
                    <div className="project-grid project-grid--full-w" style={{padding:"revert", margin:"revert"}}>
 
                      
      
                      <div className="tile tile-w-6 tile-h-2">
                        <Video src="/works/2022-insta-36daysoftype/s5-2.mp4"/>
                      </div>
                      <div className="tile tile-w-6 tile-h-2">
                        <Video src="/works/2022-insta-36daysoftype/X.mp4"/>
                      </div>
                      
                      <div className="tile tile-w-6 tile-h-2">
                        <Video src="/works/2022-insta-36daysoftype/5.mp4"/>
                      </div>
                      <div className="tile tile-w-6 tile-h-2">
                        <Video src="/works/2022-insta-36daysoftype/Z.mp4"/>
                      </div>
                                  </div>
                  </ProjectHoverLink>
                </div>

<div className="tile rounded tile-w-8 tile-h-1" style={{backgroundColor: "yellow"}}>
  </div>
  </div>

  <p className="label-accent note slide-up-on-scroll-1" style={{ animationDelay: "0.5s", animationDuration: "1s" }}>Our work has been installed in public galleries, exhibitions, and open-air sites.</p>
  <div className="project-grid project-grid--full-w slide-up-on-scroll-0" style={{ animationDelay: "1.5s", animationDuration: "1s" }}>

                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink
                    href="work/2019-broadway-mural-project"
                    title="Broadway Mural Project"
                  >
                    <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                  </ProjectHoverLink>
                </div>
                
                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/wtc/cover.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/us-map-cover.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/london-review.jpg"></img>
                  </ProjectHoverLink>
                </div>
                
              
                <div className="tile rounded tile-w-6 tile-h-3">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/2018-sfpc-comms/cover.jpg"></img>
                  </ProjectHoverLink>
                </div>

                </div>

                <p className="label-accent note slide-up-on-scroll-1" style={{ animationDelay: "0.5s", animationDuration: "1s" }}>And our custom typefaces, calligraphy, and letterin blah blah.</p>
  <div className="project-grid project-grid--full-w slide-up-on-scroll-0" style={{ animationDelay: "1.5s", animationDuration: "1s" }}>
    
                <div className="tile rounded tile-w-6 tile-h-4">
                  <ProjectHoverLink
                    href="work/2018-hanys-harvest-branding"
                    title="Hanys Harvest Branding"
                  >
                    <img src="/works/2018-client-brand-hanys-harvest/mockup_wide.png"></img>
                  </ProjectHoverLink>
                </div>
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
                <div className="tile rounded tile-w-4 tile-h-6">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/constant-poster.jpeg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-4 tile-h-5">
                  <ProjectHoverLink href="work/zapata" title="7 Years of SFPC">
                    <img src="/works/2019-sfpc-poster/cover.jpg"></img>
                  </ProjectHoverLink>
                </div>
                
                <div className="tile rounded tile-w-4 tile-h-6">
                  <ProjectHoverLink href="work/zapata" title="The Winter Garden">
                    <img src="/works/2022-winter-garden-cover/cover.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-6 tile-h-4">
                  <ProjectHoverLink href="work/zapata" title="WTC Mural">
                    <img src="/works/kiplingers-cover.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile rounded tile-w-6 tile-h-4">
                  <ProjectHoverLink href="work/zapata" title="Typeface: Zapata">
                    <img src="/works/typeface-zapata/logo.png"></img>
                  </ProjectHoverLink>
                </div>
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