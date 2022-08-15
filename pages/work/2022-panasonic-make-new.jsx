import ProjectDetails from "../../components/ProjectDetails";

export default function MakeNew() {
  return (
    <ProjectDetails
      title="Panasonic —"
      headerUrl="/works/2022-client-brand-panasonic/make-new-wide-2.png"
      bgColor="black"
      intro={
        <>
          <h4>Make New</h4>
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
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
