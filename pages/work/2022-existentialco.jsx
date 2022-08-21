import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function ExistentialCo() {
  return (
    <ProjectDetails
      title="Existential Co."
      intro={
        <>
          <p>
            For the launch of L.A. based production company Existential, we collaborated 
            with graphic design studio <b>Pact</b> to bring their online presence
            to life.
          </p>
          <p>
            Aiming for a simple and dynamic hub for community engagement, we built
            a custom website with a kinetic typographic landing page.
          </p>
          <p>
            Their first campaign ponders the question — Why are we here? Visitors can
            provide their perspectives and download a shareable animation.
          </p>
          <p>
            tktk main website pages; prototypes of different animations; instagram download; planning in notion
          </p>
          <p>
            
          </p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-web-existential/cover.mov"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-web-existential/growth.mov"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <Video src="/works/2022-client-web-existential/exist-and-thrive.mov"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <Video src="/works/2022-client-web-existential/collective-action.mov"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <Video src="/works/2022-client-web-existential/care-and-connection.mov"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <Video src="/works/2022-client-web-existential/escargo.mov"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-web-existential/why.mov"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-web-existential/char-prototypes.mov"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video src="/works/2022-client-web-existential/transition.mov"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img src="/works/2022-client-web-existential/ui.png"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img src="/works/2022-client-web-existential/ty.png"/>
        </div>
      </div>
    </ProjectDetails>
  );
}
