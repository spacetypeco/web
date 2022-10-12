import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Map of the United States"
      intro={
        <>
          <p>
            A hand painted map of the United States, with lettering inspired by various American wood types from the 19th century.
          </p>

          <p>
            Created in commemoration of cross-country road trips between New York and California.
          </p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-8">
          <img data-src="/works/us-map/us-map-cover" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-10">
        <img data-src="/works/us-map/process" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
