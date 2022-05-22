import Head from "next/head";
import Link from "next/link";
import Navigation from "../components/Navigation";
import NewsletterSignup from "../components/NewsletterSignup";

const TypeDesignSchool = <Link href="https://typedesignschool.com">typedesignschool.com</Link>
const LetterformDesign = <Link href="https://letterformdesign.com">letterformdesign.com</Link>
const GenerativeType = <Link href="https://generativetype.com">generativetype.com</Link>

export default function About() {
  return (<>
    <Head>
      <title>Space Type - Teaching</title>
      <meta property="og:title" content="Space Type - Teaching" />
    </Head>
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
            <p>
            Sign up for our newsletter to stay in the loop for future announcements:
            <NewsletterSignup/>
            </p>
            <hr/>
            <h2>Educational Resources</h2>
            <p>            
              <ul className="list-basic subtext">
              <li>Foundations of Type Design @ { TypeDesignSchool }</li>
              </ul>
            </p>
            <hr/>
            <h2>Past Student Projects</h2>
            <p>
            <ul className="list-basic subtext">
              <li>Type Design & Lettering @ { LetterformDesign }</li>
              <li>Generative Typography @ { GenerativeType }</li>
            </ul>
            </p>
            <hr/>
            <h2>Workshops</h2>
            <p>
              <ul className="list-basic subtext">
              <li><Link href="https://2022.typographics.com/workshops/">Typographics</Link> - Code x Kinetic Type, Jun 13-15 2022</li>
              <li><Link href="https://letterformarchive.org/events/view/designing-flourishes2">Letterform Archive</Link> - Flourishing, Jun 22–23 2022</li>
              <li><Link href="https://letterformarchive.org/events/view/in-person-core-prototyping-letterforms">Letterform Archive</Link> - Prototyping Letterforms, Jun 25–26 2022</li>
              </ul>
            </p>              
            <p>
Previously offered courses:<ul className="list-basic subtext">
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
    </>
  );
}