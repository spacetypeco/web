import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Broadway Mural"
      intro={
        <>
          <p>Client: Silverstein Properties</p>
          <p>
            Mural painted on the 2nd floor of 120 Broadway in New York City.
            Each letter contains an iconic scene or building that can be seen
            from the iconic Broadway street.
          </p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-12 tile-h-7">
          <img src="/works/sfpc-communication/white.jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-7">
          <img src="/works/sfpc-communication/cover.jpg"></img>
        </div>
        {/* <div className="tile-w-6 tile-h-3">
          <img src="/works/sfpc-communication/wip.jpg"></img>
        </div> */}
        {/* <div className="tile-w-12 tile-h-6" style={{width: "100%", height:"100%", display: "inline-block", pointerEvents: "none"}}>
        <iframe src="https://player.vimeo.com/video/301483524?h=c207118a62&autoplay=1&loop=1&title=0&byline=0&portrait=0&sidedock=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{width: "100%", height:"100%", display: "inline-block"}}
></iframe>
</div> */}
        <div className="tile-w-12 tile-h-6">
          <Video src="/works/sfpc-communication/IMG_1985.MOV"/>
        </div>
        <div className="tile-w-12 tile-h-6">
          <Video src="/works/sfpc-communication/IMG_2022.mp4"/>
        </div>
      </div>
    </ProjectDetails>
  );
}
