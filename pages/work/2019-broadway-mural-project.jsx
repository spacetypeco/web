import ProjectDetails from "../../components/ProjectDetails";

export default function MakeNew() {
  return (
    <ProjectDetails
      title="Broadway Mural"
      headerUrl="/works/2019-client-mural-broadway/wide-still.jpg"
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
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-3">
          <img src="/works/2019-client-mural-broadway/wide-still.jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
