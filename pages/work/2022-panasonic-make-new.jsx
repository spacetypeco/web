import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function MakeNew() {
  return (
    <ProjectDetails
      title="Panasonic / Make New"
      headerUrl="/works/2022-client-brand-panasonic/make-new-wide-2.png"
      intro={
        <>
          <p>
            For Panasonic's new campaign, Space Type was invited alongside other artists to
            share our own interpretations of their new slogan, "Make New." The resulting 30-second advert
            was aired on Japanese TV channels and compiled into a website showcasing individual
            works.
          </p>
          <p>All motion graphics were built for the web using p5.js and custom shaders.</p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-brand-panasonic/cover.mov"/>
        </div>
        <div className="tile tile-w-12 tile-h-6" style={{height: "100%"}}>
        <iframe src='https://www.youtube.com/embed/BHCOvooEdy8'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        style={{width: "100%", height:"100%", display: "inline-block"}}
        />
        </div>
        <div className="tile tile-w-4 tile-h-8">
          <Video src="/works/2022-client-brand-panasonic/make-new-artists.mov"/>
        </div>
        <div className="tile-w-4 tile-h-4 tile-lg-w-6 tile-lg-h-6">
          <Video src="/works/2022-client-brand-panasonic/scene-3.mov"/>
        </div>
        <div className="tile-w-4 tile-h-4 tile-lg-w-6 tile-lg-h-6">
          <Video src="/works/2022-client-brand-panasonic/scene-2.mov"/>
        </div>
        <div className="tile-w-4 tile-h-4 tile-lg-w-6 tile-lg-h-6">
          <Video src="/works/2022-client-brand-panasonic/scene-1-2d.mov"/>
        </div>
        <div className="tile-w-4 tile-h-4 tile-lg-w-6 tile-lg-h-6">
          <Video src="/works/2022-client-brand-panasonic/scene-1-3d.mov"/>
        </div>
      </div>
    </ProjectDetails>
  );
}
