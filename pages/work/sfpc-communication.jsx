import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="SFPC - Communication"
      intro={
        <>
          
          <p>
            Created during residency with the School for Poetic Computation, this device brings the power of communication into collaboration with physical machinations
            to reflect the seismic power of language to inspire and create cultural movements.
            </p>
              <p>Motors and cams form physical waves under a bed of mounted rods, creating the seismic thrust for individual strips to join together into a single collective voice.</p>

              <p>Materials: wooden cams, acrylic rods, plywood, 2812b LED strips, and openFrameworks</p>
            
<p>Advisor: CW&T, Zach Lieberman from the School for Poetic Computation</p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-12 tile-h-7">
          <img data-src="/works/sfpc-communication/white" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-7">
          <img data-src="/works/sfpc-communication/cover" data-fmt="jpg"></img>
        </div>
        {/* <div className="tile-w-6 tile-h-3">
          <img src="/works/sfpc-communication/wip.jpg"></img>
        </div> */}
        {/* <div className="tile-w-12 tile-h-6" style={{width: "100%", height:"100%", display: "inline-block", pointerEvents: "none"}}>
        <iframe src="https://player.vimeo.com/video/301483524?h=c207118a62&autoplay=1&loop=1&title=0&byline=0&portrait=0&sidedock=0&background=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style={{width: "100%", height:"100%", display: "inline-block"}}
></iframe>
</div> */}
        <div className="tile-w-12 tile-h-6">
          <Video datasrc="/works/sfpc-communication/IMG_1985-trimmed"/>
        </div>
        <div className="tile-w-12 tile-h-6">
          <Video datasrc="/works/sfpc-communication/IMG_2022-trimmed"/>
        </div>
      </div>
    </ProjectDetails>
  );
}
