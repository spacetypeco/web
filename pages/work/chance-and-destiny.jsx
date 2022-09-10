import ProjectDetails from "../../components/ProjectDetails";

export default function ChanceAndDestiny() {
  return (
    <ProjectDetails
      title="Chance and Destiny"
      intro={
        <>
          <p>
            Taking inspiration from the German tradition of paper cut-outs, this
            piece was written in Textura, carefully cut out from black paper,
            then attached to a green handmade paper.
          </p>
          <p>
            <i>Chance and Destiny</i> currently lives in the collection of Jerry Kelly and was
            included in The Calligraphy Revival: 1906 to 2016 exhibition at The
            Grolier Club.
          </p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/chance-and-destiny/Chance_Destiny_Textura_Cutout_lr" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/chance-and-destiny/Textura_process" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
