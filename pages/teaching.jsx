import Link from "next/link";
import Navigation from "../components/Navigation";

const TypeDesignSchool = <Link href="https://typedesignschool.com">typedesignschool.com</Link>
const LetterformDesign = <Link href="https://letterformdesign.com">letterformdesign.com</Link>
const GenerativeType = <Link href="https://generativetype.com">generativetype.com</Link>

export default function About() {
  return (
    <main>
      <div id="container" className="full-w full-h position-rel">
        <Navigation active="/teaching" />
        <div id="about">
          <div className="fade-in content markdown-body">
            <h1>Teaching</h1>
            <p>
            Community and education is at the heart of our practice. 
            We teach workshops, run classes, and offer donation-based educational resources.
            </p>
            <p>
            We are dedicated to inclusive education, accessible technology, and open creative
            tools that empower all members of our community. We welcome fresh eyes, 
            diverse backgrounds, and personal stories that reflect the many ways
            we interact with language in physical and online spaces.
            </p>
            <hr/>
            <h2>Educational Resources</h2>
            <p>            
              <ul class="list-basic">
              <li>Foundations of Type Design @ { TypeDesignSchool }</li>
              </ul>
            </p>
            <hr/>
            <h2>Past Student Projects</h2>
            <p>
            <ul class="list-basic">
              <li>Type Design & Lettering @ { LetterformDesign }</li>
              <li>Generative Typography @ { GenerativeType }</li>
            </ul>
            </p>
            <hr/>
            <h2>Workshops</h2>
            <p>
              We are planning on offering new workshops in fall 2022.
            </p>              
            <p>
Previously offered courses:<ul class="list-basic">
<li><Link href="https://letterformarchive.org/education/">Letterform Archive</Link> - Type West:  Type Design, Jun–Aug 2022</li>
<li><Link href="http://coopertype.org/event/generative_type_sp2021">Type@Cooper</Link> - Generative Typography, Feb–Apr 2022</li>
<li><Link href="https://courses.newschool.edu/courses/PSAM3010">Parsons School of Design</Link> - Type Design, Jan–May 2022</li>
<li><Link href="https://2021.typographics.com/workshops/">Typographics</Link> – Code x Typography Series, Jun 2021</li>
<li><Link href="https://letterformarchive.org/education/">Letterform Archive</Link> - Type West:  Type Design, Jun–Aug 2021</li>
<li><Link href="https://courses.newschool.edu/courses/PSAM3010">Parsons School of Design</Link> - Type Design, Jan–May 2021</li>
<li><Link href="http://coopertype.org/event/generative_type_fall2020">Type@Cooper</Link> - Generative Typography, Oct–Dec 2020</li>
<li><Link href="http://coopertype.org/event/generative_typography">Type@Cooper</Link> - Generative Typography, Jun–Jul 2020</li>
<li><Link href="http://coopertype.org/event/hand_lettering">Type@Cooper</Link> - Hand Lettering, Feb–Apr 2020</li>
</ul>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}