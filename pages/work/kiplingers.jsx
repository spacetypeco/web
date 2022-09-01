import ProjectDetails from "../../components/ProjectDetails";

export default function Kiplingers() {
  return (
    <ProjectDetails
      title="Kiplingers Magazine"
      intro={
        <>
        <p>For Kiplinger’s feature article in Personal Finance Magazine, we created a custom lettering illustration spread.</p>
        <p>Art Director: Stacie Harrison</p>
        </>
      }
    >
      <div className="project-grid">
        <div className="tile-w-12 tile-h-3">
          <img src="/works/kiplingers-cover.jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
