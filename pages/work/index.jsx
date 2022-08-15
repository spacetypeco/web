import Head from "next/head";
import Navigation from "../../components/Navigation";
import ProjectHoverLink from "../../components/ProjectHoverLink";
import useLogo from "../../hooks/useLogo";

function Works() {
  useLogo();
  
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
                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink
                    href="work/2022-panasonic-make-new"
                    title="Panasonic: Make New"
                  >
                    <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink
                    href="work/2019-broadway-mural-project"
                    title="Broadway Mural Project"
                  >
                    <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile-w-6 tile-h-6">
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
                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink
                    href="work/2022-36-days-of-type"
                    title="36 Days of Type"
                  >
                    <img src="/works/2022-insta-36daysoftype/squareish.png"></img>
                  </ProjectHoverLink>
                </div>

                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink
                    href="work/2022-ampersandist"
                    title="Typeface: Ampersandist"
                  >
                    <img src="/works/2022-typeface-Ampersandist/large_Futurefonts_Samples-06.png"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink
                    href="work/2022-existential"
                    title="Existential Co."
                  >
                    <img src="/works/2022-client-web-existential/square.png"></img>
                  </ProjectHoverLink>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <ProjectHoverLink href="work/2022-vartype" title="Vartype">
                    <video autoPlay={true} loop={true}>
                      <source
                        src="/works/2022-tool-vartype/vartype-insta-3.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </ProjectHoverLink>
                </div>
                <div className="tile-w-6 tile-h-6">
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