import ProjectDetails from "../../components/ProjectDetails";

export default function LondonReviewOfBooks() {
  return (
    <ProjectDetails
      title="London Review of Books"
      intro={
        <>
          <p>For the Book Expo of America, we worked with the London Review of Books to letter the subject of their most popular blog post to date: <i>Loren Ipsum and its translation</i>.
            On a 10 x 10 ft. wall of the Javitz Center, <i>Lorem Ipsum</i> and its English counterpart was brush lettered with gouache paint. </p>

          <div className="flex-gap">
            <span className="badge">Original blog piece: Nick Richardson</span>
          <span className="badge">Translation: Jaspreet Singh Boparai</span></div>
          <p><a href="http://keranews.org/post/designers-placeholder-lorem-ipsum-sense-poetry">Featured on KERA</a></p>
        </>
      }
    >
      <div className="project-grid project-grid--unsized">
        <div className="tile-w-12 tile-h-3">
          <img data-src="/works/london-review-of-books/Wall-Close-Up" data-fmt="jpg"></img>
        </div>
        <div className="tile-w-12 tile-h-3">
        <img data-src="/works/london-review-of-books/LRB_5" data-fmt="jpg"></img>
        </div>
      </div>
    </ProjectDetails>
  );
}
