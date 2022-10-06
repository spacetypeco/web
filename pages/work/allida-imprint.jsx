import ProjectDetails from "../../components/ProjectDetails";

export default function AllidaImprint() {
  return (
    <ProjectDetails
      title="Allida"
      intro={
        <>
          <p>
            Space Type was commissioned to design a new logo for HarperCollins' new
            imprint, Allida.
          </p>
          <p>
            Led by author & activist Linda Sue Park and director Anne Hoppe,
            Allida publishes the stories of marginalized writers and artists to
            inspire and represent a new generation of children.
          </p>
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
