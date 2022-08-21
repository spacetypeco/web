import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function Vartype() {
  return (
    <ProjectDetails
      title="Vartype"
      intro={
        <>
          <p>
            tktktk
          </p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-tool-vartype/fitv2.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-1.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-2.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-3.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-4.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-5.mov"/>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <Video src="/works/2022-tool-vartype/sq-6.mov"/>
        </div>
        </div>
    </ProjectDetails>
  );
}
