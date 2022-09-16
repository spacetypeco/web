import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function ExistentialCo() {
  return (
    <ProjectDetails
      title="Existential Co."
      intro={
        <>
          <p>
            For the launch of L.A. based production company Existential, we teamed up 
            with graphic design studio <b>Pact</b> to bring their online presence
            to life.
          </p>
          <p>
            Tasked with creating a simple and dynamic hub for community engagement, we built
            a custom website with a kinetic typographic landing page.
          </p>
          <p>
            <i>'Why are we here?'</i> is their launch campaign, allowing visitors to
            provide their perspectives and share them through kinetic type on social media.
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
          <Video src="/works/2022-client-web-existential/exist-and-thrive-500w.m4v"/>
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
          <img data-src="/works/2022-client-web-existential/ui" data-fmt="png"/>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img data-src="/works/2022-client-web-existential/ty" data-fmt="png"/>
        </div>
      </div>
    </ProjectDetails>
  );
    }