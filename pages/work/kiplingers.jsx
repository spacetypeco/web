import ProjectDetails from "../../components/ProjectDetails";

export default function Kiplingers() {
  return (
    <ProjectDetails
      title="Kiplingers Magazine"
      intro={
        <>
        <p>We created a custom lettering illustration spread for Kiplinger’s feature article in Personal Finance Magazine.</p>
        <div className="credits">
          <span>Client: Kiplingers Magazine</span>
          <span>Art Director: Stacie Harrison</span>
        </div>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-3">
          <img data-src="/works/kiplingers-cover" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
