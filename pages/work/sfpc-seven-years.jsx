import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Broadway Mural"
      intro={
        <>
          <p>Client: Silverstein Properties</p>
          <p>
            Mural painted on the 2nd floor of 120 Broadway in New York City.
            Each letter contains an iconic scene or building that can be seen
            from the iconic Broadway street.
          </p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile tile-w-6 tile-h-7">
          <img src="/works/2019-sfpc-poster/cover.jpg"></img>
        </div>
        <div className="tile tile-w-6 tile-h-7">
          <img src="/works/2019-sfpc-poster/installed.jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}