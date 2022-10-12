import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Quick Brown Fox"
      intro={
        <>
          <p>
            This classic English pangram was commissioned for{" "}
            <i>‘Found In Translation’</i>, an exhibit in New York featuring
            Latin and Korean typographic posters.
          </p>

          <div className="credits">
            <span>Client: Stigma & Cognition</span>
          </div>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-7">
          <img data-src="/works/quick-brown-fox/cover" data-fmt="png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
