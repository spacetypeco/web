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
        <div className="tile-w-12 tile-h-6">
          <img src="/works/wtc/cover.jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-6">
        <img src="/works/wtc/WTC_2.jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
        <img src="/works/wtc/WTC_3.jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
        <img src="/works/wtc/WTC_4.jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
