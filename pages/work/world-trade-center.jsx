import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="World Trade Center Mural"
      intro={
        <>
          <p>
            For the site of 2 World Trade Center, Space Type was commissioned to
            paint a 16ft by 21ft mural inspired by retro <i>'Greetings From'</i>{" "}
            postcards.
          </p>

          <p>
            The lettering piece was hand-painted across the exterior of the
            building and stands in the vicinity of the Oculus and One World
            Trade Center.
          </p>

          <p>
            <div className="flex-gap-2">
              <span className="badge">Client: World Trade Center, Core12</span>
              <span className="badge">Art Direction: Anthony Elder</span>
            </div>
          </p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/wtc/cover" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/wtc/WTC_2" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
          <img data-src="/works/wtc/WTC_3" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-6 tile-h-6">
          <img data-src="/works/wtc/WTC_4" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
