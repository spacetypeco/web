import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function DaysOfType2022() {
  const assetFolder = "/works/2022-insta-36daysoftype";

  return (
    <ProjectDetails
      title="36 Days of Type"
      intro={
        <>
          <p>Generative typographic experiments 👩‍🔬</p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-4">
          <Video src={`${assetFolder}/A-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/B.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/C.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/D-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/E-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/F-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/G-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/H-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/I-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/J-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/K-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/L-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/M-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/N-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/O-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/P-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Q-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/R-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/S-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/T-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/U-500w.m4v`} style={{objectFit: "contain"}} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/V-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/W-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/X-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Y-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Z-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/1-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/2-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/3.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/4-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/5.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/6-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/7-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/8-500w.m4v`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/9-500w.m4v`} />
        </div>
      </div>
    </ProjectDetails>
  );
}
