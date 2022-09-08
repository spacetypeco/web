import ProjectDetails from "../../components/ProjectDetails";

export default function HanysHarvest() {
  return (
    <ProjectDetails
      title="Hany's Harvest"
      intro={
        <>
          <p>
            For Hany's 
            Mural painted on the 2nd floor of 120 Broadway in New York City.
            Each letter contains an iconic scene or building that can be seen
            from the iconic Broadway street.
          </p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-3">
          <img data-src="/works/2018-client-brand-hanys-harvest/Allflavors_lr" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-3">
          <img data-src="/works/2018-client-brand-hanys-harvest/business_card_lr" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-2">
        <img data-src="/works/2018-client-brand-hanys-harvest/sketch" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-2">
          <img data-src="/works/2018-client-brand-hanys-harvest/Hanys_label_8oz_Original" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
