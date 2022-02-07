import FontRow from "../components/FontRow";
import Navigation from "../components/Navigation";

export default function Type() {
  return (
  <main>
    <div id="container" className="full-w full-h position-rel">

      <Navigation/>
      <div id="about">
      <div className="content">
        <div class="flex-v full-w typetester-content-container">
          <FontRow label="Ampersandist Light"/>
          <hr/>
          <FontRow label="Ampersandist Medium"/>
          <hr/>
          <FontRow label="Ampersandist Black"/>
          <hr/>
          <span class="and-more">& ... more coming soon!</span>
        </div>
      </div>
      </div>
    </div>
  </main>
);
    
}