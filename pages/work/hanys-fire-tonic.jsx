import ProjectDetails from "../../components/ProjectDetails";

export default function HanysHarvest() {
  return (
    <ProjectDetails
      title="Hany's Fire Tonic"
      intro={
        <>
          <p>
            For Hany's new line of Fire Tonic — a raw apple cider vinegar
            infusion tonic — Space Type was commissioned to hand-letter and design
            their identity and packaging.
          </p>
          <p>
            Inspired by the tonic's bold and invigorating taste, we created
            an expressive and adventurous identity using custom lettering.
          </p>
          <p className="badge">Client: Hany’s Harvest</p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-3">
          <img
            data-src="/works/2018-client-brand-hanys-harvest/Allflavors_lr"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-12 tile-h-3">
          <img
            data-src="/works/2018-client-brand-hanys-harvest/business_card_lr"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-6 tile-h-2">
          <img
            data-src="/works/2018-client-brand-hanys-harvest/sketch"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-6 tile-h-2">
          <img
            data-src="/works/2018-client-brand-hanys-harvest/Hanys_label_8oz_Original"
            data-fmt="jpg"
          ></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
