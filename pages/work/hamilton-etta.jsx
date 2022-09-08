import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Etta Typeface"
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
        <div className="tile tile-w-6 tile-h-3">
          <img data-src="/works/etta/HWT Etta Banners-01" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img data-src="/works/etta/HWT Etta Banners-02" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_NewYorkers" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_Styles" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_East" data-fmt="png"></img>
        </div>
        <div className="tile-w-8 tile-h-4">
          <img data-src="/works/etta/Etta_banners_03" data-fmt="png"></img>
        </div>
        <div className="tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_E" data-fmt="png"></img>
        </div>
        <div className="tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_A" data-fmt="png"></img>
        </div>
        <div className="tile-w-8 tile-h-4">
          <img data-src="/works/etta/Etta_banners_04" data-fmt="png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
