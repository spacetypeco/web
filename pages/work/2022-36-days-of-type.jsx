import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function DaysOfType2022() {
  const assetFolder = "/works/2022-insta-36daysoftype";

  return (
    <ProjectDetails
      title="36 Days of Type"
      intro={
        <>
          <p>We designed a series of generative letters for 2022.</p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-4">
          <Video src={`${assetFolder}/A.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/B.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/C.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/D.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/E.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/F.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/G.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/H.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/I.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/J.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/K.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/L.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/M.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/N.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/O.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/P.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Q.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/R.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/s5.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/U.mp4`} style={{objectFit: "contain"}} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/V.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/W.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/X.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Y.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/Z.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/1.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/2.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/3.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/4.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/5.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/6.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/7.mp4`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/8.mov`} />
        </div>
        <div className="tile-w-4">
          <Video src={`${assetFolder}/9.mp4`} />
        </div>
      </div>
    </ProjectDetails>
  );
}
