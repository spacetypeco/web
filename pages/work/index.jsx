import Head from "next/head";
import Navigation from "../../components/Navigation";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import Video from "../../components/Video";
import useLogo from "../../hooks/useLogo";
import useVideoManager from "../../hooks/useVideoManager";

function Works() {
  useLogo();
  useVideoManager();
  
  return (
    <>
      <Head>
        <title>Space Type - Work</title>
        <meta property="og:title" content="Space Type - Work" />
      </Head>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <Navigation active="/work" />
          <div id="about">
            <div className="fade-in content-top">
              <div className="project-grid">
                <div className="tile tile-w-6 tile-h-3">
                  <ProjectHoverLink
                    href="work/2022-panasonic-make-new"
                    title="Panasonic: Make New"
                  >
                    <Video src="/works/2022-client-brand-panasonic/cover.mov"/>
                  </ProjectHoverLink>
                </div>
                <div className="tile tile-w-4 tile-h-4">
                  <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                    <Video src="/works/2022-tool-vartype/cover.mp4"/>
                  </ProjectHoverLink>
                </div>
                <div className="tile tile-w-2 tile-h-10" style={{backgroundColor: "red"}}>
                  
                </div>
                
                <div className="tile tile-w-6 tile-h-4">
                  <ProjectHoverLink
                    href="work/2022-existentialco"
                    title="Existential Co."
                  >
                    <Video src="/works/2022-client-web-existential/cover.mov"/>
                  </ProjectHoverLink>
                </div>
                <div className="tile tile-w-4 tile-h-6">
                  <ProjectHoverLink
                    href="work/2022-36-days-of-type"
                    title="36 Days of Type"
                  >
                    <img src="/works/2022-insta-36daysoftype/squareish.png"></img>
                  </ProjectHoverLink>
                </div>
                {/* <div className="tile tile-w-6 tile-h-1">
                  <h2>Generative Typography</h2>
                </div> */}
                <div className="tile tile-w-6 tile-h-3" style={{backgroundColor: "blue"}}>
                  
                  </div>
                <div className="tile tile-w-2 tile-h-10" style={{backgroundColor: "blue"}}>
                  
                </div>
                <div className="tile tile-w-8 tile-h-4">
                  <ProjectHoverLink
                    href="work/2019-broadway-mural-project"
                    title="Broadway Mural Project"
                  >
                    <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile tile-w-4 tile-h-4">
                  <ProjectHoverLink
                    href="work/2022-ampersandist"
                    title="Typeface: Ampersandist"
                  >
                    <img src="/works/2022-typeface-Ampersandist/large_Futurefonts_Samples-06.png"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile tile-w-6 tile-h-4">
                  <ProjectHoverLink
                    href="work/2018-hanys-harvest-branding"
                    title="Hanys Harvest Branding"
                  >
                    <img src="/works/2018-client-brand-hanys-harvest/mockup_wide.png"></img>
                  </ProjectHoverLink>
                </div>
                {/* <div className="tile-w-12 tile-h-12">
                  <video autoplay>
                      <source src="/works/2022-client-brand-panasonic/4_second_clip.mov" type="video/mp4"/>
                  </video>
                </div> */}

                
                <div className="tile tile-w-6 tile-h-4">
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