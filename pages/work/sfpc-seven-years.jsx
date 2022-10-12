import ProjectDetails from "../../components/ProjectDetails";

export default function SFPCSevenYears() {
  return (
    <ProjectDetails
      title="Seven Years of SFPC"
      intro={
        <>
          <p>
            We were commissioned to design a poster for the ‘Poetic Computation:
            7 Years of SFPC’ exhibition. The poster was hand drawn to best
            portray the care and intimacy of the programs at The School for
            Poetic Computation. The resulting lettering work was displayed in
            the West Village, NYC.
          </p>
          <div className="credits">
            <span>Client: School for Poetic Computation</span>
          </div>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile tile-w-6 tile-h-7">
          <img data-src="/works/2019-sfpc-poster/cover" data-fmt="jpg"></img>
        </div>
        <div className="tile tile-w-6 tile-h-7">
          <img
            data-src="/works/2019-sfpc-poster/installed"
            data-fmt="jpg"
          ></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
