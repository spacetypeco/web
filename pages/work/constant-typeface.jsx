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
        <div className="tile-w-8 tile-h-1">
          <img src="/works/constant-typeface/Constant_3.jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/constant-typeface/Constant_4.jpg"></img>
        </div>
        <div className="tile tile-w-12 tile-h-12">
          <img src="/works/constant-typeface/Constant_2.jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img src="/works/constant-typeface/Constant_7.jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img src="/works/constant-typeface/Constant_6.jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img src="/works/constant-typeface/Constant_5.jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
