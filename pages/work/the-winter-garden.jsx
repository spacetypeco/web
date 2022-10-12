import ProjectDetails from "../../components/ProjectDetails";

export default function TheWinterGarden() {
  return (
    <ProjectDetails
      title="The Winter Garden"
      intro={
        <>
          <p>
            We provided cover lettering for award-winning author Nicola
            Cornick's latest novel, <i>'The Winter Garden'</i>.
          </p>
          <p>
            <i>'The Winter Garden'</i> is Cornick's sweeping true story about
            Robert Catesby, the leader of the infamous Gunpowder Plot.
          </p>
          <div className="credits">
            <span>Client: Harper Collins Publishers</span>
            <span>Art Direction: Kathleen Oudit</span>
          </div>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-12 tile-h-8">
          <img
            data-src="/works/2022-winter-garden-cover/mockup-new"
            data-fmt="png"
          ></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
