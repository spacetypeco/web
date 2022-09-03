import ProjectDetails from "../../components/ProjectDetails";
import ResponsiveImg from "../../components/ResponsiveImg";
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
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/cover"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/growth"/>
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/exist-and-thrive"/>
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/collective-action"/>
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/care-and-connection"/>
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/escargo"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/why"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/char-prototypes"/>
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/transition"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <ResponsiveImg src="/works/2022-client-web-existential/ui" format="png"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <ResponsiveImg src="/works/2022-client-web-existential/ty" format="png"/>
        </div>
      </div>
    </ProjectDetails>
  );
    }