import FontRow from "../components/FontRow";
import Navigation from "../components/Navigation";

export default function Type() {
  return (
  <main>
    <div id="container" className="full-w full-h position-rel">

      <Navigation active="/type" />
      <div id="about">
      <div className="content">
        <div class="flex-v full-w typetester-content-container">
          <FontRow label="Ampersandist Light" classes="fade-in"/>
          <hr/>
          <FontRow label="Ampersandist Medium" classes="fade-in delay-1"/>
          <hr className="fade-in delay-1"/>
          <FontRow label="Ampersandist Black" classes="fade-in delay-2"/>
          <hr className="fade-in delay-2"/>
          <span class="fade-in and-more delay-3">& ... more coming soon!</span>
        </div>
      </div>
      </div>
    </div>
  </main>
);
    
}