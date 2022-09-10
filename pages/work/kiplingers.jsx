import ProjectDetails from "../../components/ProjectDetails";

export default function Kiplingers() {
  return (
    <ProjectDetails
      title="Kiplingers Magazine"
      intro={
        <>
        <p>We created a custom lettering illustration spread for Kiplinger’s feature article in Personal Finance Magazine.</p>
        <p className="badge">Art Director: Stacie Harrison</p>
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
