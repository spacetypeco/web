import ProjectDetails from "../../components/ProjectDetails";

export default function EttaTypeface() {
  return (
    <ProjectDetails
      title="Etta Typeface"
      intro={
        <>
          <p>
            In collaboration with the Hamilton Wood Type & Printing Museum and
            Faire Type, we designed the Etta typeface for the production of new
            wood types through the museum's unique blend of antique and
            contemporary technologies.
          </p>
          <p>
            The Etta typeface, named for Hamilton Manufacturing's first
            bookkeeper, Etta Shove Hamilton, is a display typeface in two
            styles: East and West. Its two variations can be combined or used as
            a chromatic font.
          </p>
          <p>
            The typeface takes cues from the design experimentation happening in
            the heyday of mid 19th Century wood type, but filters it through
            1960s photo-type sensibilities.
          </p>
          <p>
              Featured on:{" "}
              <a href="https://woodtype.org/pages/copy-of-wood-type-legacy-project">
                Hamilton Wood Type Legacy Project →
              </a>
            </p>
          <div className="credits">
            <span>Client: Hamilton Wood Type & Printing Museum</span>
            <span>
              Typeface & Visual Design Collaboration:{" "}
              <a href="https://fairetype.com/">Faire Type</a>
            </span>
          </div>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile tile-w-6 tile-h-3">
          <img data-src="/works/etta/HWT Etta Banners-01" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-6 tile-h-3">
          <img data-src="/works/etta/HWT Etta Banners-02" data-fmt="png"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_NewYorkers" data-fmt="PNG"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_Styles" data-fmt="PNG"></img>
        </div>
        <div className="tile tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_East" data-fmt="PNG"></img>
        </div>
        <div className="tile-w-8 tile-h-4">
          <img data-src="/works/etta/Etta_banners_03" data-fmt="PNG"></img>
        </div>
        <div className="tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_E" data-fmt="PNG"></img>
        </div>
        <div className="tile-w-4 tile-h-4">
          <img data-src="/works/etta/FT_ETTA_A" data-fmt="PNG"></img>
        </div>
        <div className="tile-w-8 tile-h-4">
          <img data-src="/works/etta/Etta_banners_04" data-fmt="png"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
