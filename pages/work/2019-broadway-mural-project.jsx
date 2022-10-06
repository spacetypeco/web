import ProjectDetails from "../../components/ProjectDetails";

export default function BroadwayMural() {
  return (
    <ProjectDetails
      title="Broadway Mural"
      intro={
        <>
          <p>
            Space Type was commissioned to paint a mural on the 2nd floor of 120 Broadway 
            in New York City. Each letter contains an iconic scene or building that can 
            be seen from the iconic Broadway street.
          </p>
          <p class="badge">Client: Silverstein Properties</p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-12 tile-h-6">
          <img data-src="/works/2019-client-mural-broadway/wide-still" data-fmt="jpg"></img>
        </div>
        <div className="tile tile-w-12 tile-h-6" style={{ height: "100%" }}>
          <iframe
            src="https://www.youtube.com/embed/B4edA9fuaxU"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
            style={{ width: "100%", height: "100%", display: "inline-block" }}
          />
        </div>
      </div>
    </ProjectDetails>
  );
}
