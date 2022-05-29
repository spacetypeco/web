import ProjectDetails from "../../components/ProjectDetails";

export default function MakeNew() {
  return (
    <ProjectDetails
      title="Make New"
      headerUrl="/works/2022-client-brand-panasonic/make-new-wide-2.png"
      bgColor="black"
      intro={
        <>
          <p>Client: Panasonic</p>
          <p>
            Generative typography pieces for the Panasonic “Make New” campaign,
            commissioned through Spoon Inc. The 30 sec advert features work from
            many talented artists and aired on Japanese TV channels.
          </p>
          <p>Hand coded with #javascript, #p5js, and #glsl shaders.</p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-6 tile-h-6">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
          <img src="/works/2022-client-brand-panasonic/make-new-wide-2.png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
