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
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-6 tile-h-8">
          <img
            data-src="/works/2022-winter-garden-cover/cover"
            data-fmt="jpg"
          ></img>
        </div>
        <div className="tile tile-w-6 tile-h-8">
          <img
            data-src="/works/2022-winter-garden-cover/mockup"
            data-fmt="png"
          ></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
