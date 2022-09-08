import ProjectDetails from "../../components/ProjectDetails";

export default function ConstantTypeface() {
  return (
    <ProjectDetails
      title="Constant Typeface"
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
        <div className="tile-w-8 tile-h-1">
          <img data-src="/works/constant-typeface/Constant_3" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img data-src="/works/constant-typeface/Constant_4" data-fmt="jpg"></img>
        </div>
        <div className="tile tile-w-12 tile-h-12">
          <img data-src="/works/constant-typeface/Constant_2" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img data-src="/works/constant-typeface/Constant_7" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img data-src="/works/constant-typeface/Constant_6" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img data-src="/works/constant-typeface/Constant_5" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
