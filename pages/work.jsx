import Head from "next/head";
import Image from "next/image";
import Navigation from "../components/Navigation";

export default function Works() {
  return (
    <>
      <Head>
        <title>Space Type - Work</title>
        <meta property="og:title" content="Space Type - Teaching" />
      </Head>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <Navigation active="/work" />
          <div id="about">
            <div className="fade-in content">
              <div className="project-grid">
                <div className="tile-w-12 tile-h-12">
                  <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <img src="/works/2018-client-brand-hanys-harvest/mockup_wide.png"></img>
                </div>
                {/* <div className="tile-w-12 tile-h-12">
                  <video autoplay>
                      <source src="/works/2022-client-brand-panasonic/4_second_clip.mov" type="video/mp4"/>
                  </video>
                </div> */}
                <div className="tile-w-12 tile-h-12">
                  <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <img src="/works/2022-client-web-existential/square.png"></img>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <img src="/works/2022-insta-36daysoftype/squareish.png"></img>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <video autoPlay={true} loop={true}>
                      <source src="/works/2022-tool-vartype/vartype-insta-3.mp4" type="video/mp4"/>
                  </video>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <img src="/works/2022-typeface-Ampersandist/large_Futurefonts_Samples-06.png"></img>
                </div>
                <div className="tile-w-6 tile-h-6">
                  <img src="/works/typeface-zapata/logo.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
