import ProjectDetails from "../../components/ProjectDetails";
import Video from "../../components/Video";

export default function ExistentialCo() {
  return (
    <ProjectDetails
      title="Existential Co."
      intro={
        <>
          <p>
            Existential is a new production company that explores what it means
            to be human, how to live lives of purpose and authenticity, and how
            to cultivate healthy relationships with other beings and the planet.
            </p>
            <p>
            For the launch of their new brand, we teamed up with graphic design studio <b>Pact</b> to bring their
            online presence to life.
            We built a simple, dynamic, and flexible hub for community engagement with an eye-catching kinetic typographic
            landing page.
          </p>
          <p>
            Their launch campaign, <i>'Why are we here?'</i> invites visitors to examine, explore, and celebrate our individual and shared existence.
            Visitors' answers are featured on social media and can be downloaded and shared directly from the website.
          </p>
          <div className="credits">
          <span>Client: Existential Co.</span>
          <span>Branding & Art Direction: <a href="https://www.pact.studio/">Studio Pact</a></span>
          </div>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/cover" />
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/growth" />
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/exist-and-thrive" />
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/collective-action" />
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/care-and-connection" />
        </div>
        <div className="tile-w-6 tile-h-3">
          <Video datasrc="/works/2022-client-web-existential/escargo" />
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/why" />
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/char-prototypes" />
        </div>
        <div className="tile tile-w-12 tile-h-6">
          <Video datasrc="/works/2022-client-web-existential/transition" />
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img
            data-src="/works/2022-client-web-existential/ui"
            data-fmt="png"
          />
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img
            data-src="/works/2022-client-web-existential/ty"
            data-fmt="png"
          />
        </div>
      </div>
    </ProjectDetails>
  );
}
