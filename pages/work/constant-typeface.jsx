import ProjectDetails from "../../components/ProjectDetails";

export default function ConstantTypeface() {
  return (
    <ProjectDetails
      title="Constant Typeface"
      intro={
        <>
          <p>
            <i>'Constant'</i> is a bold and lively display typeface designed
            with a playful nature and an assertive attitude in large scale.
          </p>
          <p>
            Inspired by a specimen from Constantin in 1834 and redrawn with a
            more refined, modern atmosphere, it takes cues from the playful
            friendliness of its French source material while giving a nod to
            Bodoni.
          </p>
          <p>
            <i>Constant</i> is meant to be used in large applications, such
            mastheads and large-scale environmental design, where it can catch
            the eye for its assertive but playful nature.
          </p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-8 tile-h-1">
          <img
            data-src="/works/constant-typeface/Constant_3"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-4 tile-h-1">
          <img
            data-src="/works/constant-typeface/Constant_4"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile tile-w-12 tile-h-12">
          <img
            data-src="/works/constant-typeface/Constant_2"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img
            data-src="/works/constant-typeface/Constant_7"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img
            data-src="/works/constant-typeface/Constant_6"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile-w-4 tile-h-1 fit-contain">
          <img
            data-src="/works/constant-typeface/Constant_5"
            data-fmt="jpg"
          ></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
