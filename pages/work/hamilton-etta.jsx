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
      <div className="project-grid">
        <div className="tile-w-6 tile-h-1">
          <img src="/works/etta/HWT Etta Banners-01.png"></img>
        </div>
        <div className="tile-w-6 tile-h-1">
          <img src="/works/etta/HWT Etta Banners-02.png"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/etta/FT_ETTA_NewYorkers.png"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/etta/FT_ETTA_Styles.png"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/etta/FT_ETTA_East.png"></img>
        </div>
        <div className="tile-w-8 tile-h-1">
          <img src="/works/etta/Etta_banners_03.png"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/etta/FT_ETTA_E.png"></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img src="/works/etta/FT_ETTA_A.png"></img>
        </div>
        <div className="tile-w-8 tile-h-1">
          <img src="/works/etta/Etta_banners_04.png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
