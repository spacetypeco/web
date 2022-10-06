import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function Vartype() {
  return (
    <ProjectDetails
      title="Vartype"
      intro={
        <>
          <p>
            Vartype is a new web tool for designers and developers to generate kinetic, interactive,
            and fully-adjustable sketches for your variable fonts with the click of a button.
          </p>
          <p>
            <a href="https://vartype.com">Visit Website →</a>
          </p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-tool-vartype/fitv2" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-1.mov" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-2" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-3" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-4" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-5" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-6" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-7" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video datasrc="/works/2022-tool-vartype/sq-10" />
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-9.mov" />
        </div>
      </div>
    </ProjectDetails>
  );
}
