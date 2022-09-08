import ProjectDetails from "../../components/ProjectDetails";

export default function AllidaImprint() {
  return (
    <ProjectDetails
      title="Allida Imprint"
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
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/2022-allida/graphics-2" data-fmt="png"></img>
        </div>
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/2022-allida/cover" data-fmt="png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
