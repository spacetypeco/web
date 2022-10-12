import ProjectDetails from "../../components/ProjectDetails";

export default function AllidaImprint() {
  return (
    <ProjectDetails
      title="Allida"
      intro={
        <>
          <p>
            Space Type was commissioned to design a new logo for Harper Collins
            Publisher’s new imprint, Allida. In Korean, ‘Allida’ means to ‘make
            known’, signifying the mission of the imprint.
          </p>
          <p>
            Led by author & activist Linda Sue Park and director Anne Hoppe,
            Allida publishes the stories of marginalized writers and artists to
            inspire and represent a new generation of children.
          </p>
          <p>
            The logotype was inspired by the long standing tradition of Asian
            seals, where they are used to mark acknowledgment and authorship of
            important documents.
          </p>
          <div className="credits">
            <span>Client: Harper Collins Publishers</span>
            <span>Art Direction: Jessie Gang</span>
          </div>
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
