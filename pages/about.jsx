import Head from "next/head";
import Link from "next/link";
import useImageSizer from "../hooks/useImageSizer";
import useLogo from "../hooks/useLogo";

function About() {
  useLogo();
  useImageSizer();

  const TEACHING_AND_WORKSHOPS = [
    {
      host: "Parsons School of Design",
      link: "",
      title: "Currents: CD Workshop (Machine Learning)",
      dates: "Oct-Nov 2023",
    },
    {
      host: "Type Electives",
      link: "",
      title: "Pixel Type Workshop",
      dates: "Mar 2023",
    },
    {
      host: "Type Electives",
      link: "",
      title: "Intro to Generative Typography with p5.js",
      dates: "Jan-Apr 2023",
    },
    {
      host: "Letràstrica",
      link: "",
      title: "Generative Typography",
      dates: "Oct 2023",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Type West: Type Design",
      dates: "Jun-Aug 2022",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Prototyping Letterforms",
      dates: "Jun 2022",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Designing Flourishes",
      dates: "Jun 2022",
    },
    {
      host: "Typographics",
      link: "",
      title: "Code x Kinetic Type",
      dates: "Jun 2022",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Generative Typography",
      dates: "Feb-Apr 2022",
    },
    {
      host: "Parsons School of Design",
      link: "",
      title: "Type Design",
      dates: "Jan-May 2022",
    },
    {
      host: "Typographics",
      link: "",
      title: "Code x Typography Series",
      dates: "Jun 2021",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "The History and Anatomy of Flourishing",
      dates: "Mar 2021",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Type West: Type Design",
      dates: "Jun-Aug 2021",
    },
    {
      host: "Parsons School of Design",
      link: "",
      title: "Type Design",
      dates: "Jan-May 2021",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Generative Typography",
      dates: "Oct-Dec 2020",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Generative Typography",
      dates: "Jun-Jul 2020",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Intro to Lettering",
      dates: "Jun 2020",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Hand Lettering",
      dates: "Feb-Apr 2020",
    },
    {
      host: "Parsons School of Design",
      link: "",
      title: "Type Design",
      dates: "2020",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Type West Core Workshop",
      dates: "2020",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "Unconventional Tools",
      dates: "2019",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Calligraphy: Italic and Bâtarde",
      dates: "2019",
    },
    {
      host: "Ladies Wine & Design",
      link: "",
      title: "Type Design 101",
      dates: "2019",
    },
    {
      host: "SVA Residency in Typography",
      link: "",
      title: "Calligraphy for Type Design",
      dates: "2019",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Calligraphy: Historical Hands",
      dates: "2019",
    },
    {
      host: "Letteform Archive",
      link: "",
      title: "Calligraphy as a Tool for Prototyping Letterforms",
      dates: "2019",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Designing Flourishes",
      dates: "2019",
    },
    {
      host: "ECV Paris",
      link: "",
      title: "Masterclass",
      dates: "2019",
    },
    {
      host: "Type@Cooper",
      link: "",
      title: "Calligraphy: Blackletter Fundamentals",
      dates: "2019",
    },
    {
      host: "HUGE Inc",
      link: "",
      title: "Blackletter Calligraphy",
      dates: "2018",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "Basics of Blackletter",
      dates: "2017",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "Flourishing Design",
      dates: "2017",
    },
    {
      host: "TypeCon",
      link: "",
      title: "Flourishing Design",
      dates: "2017",
    },
    {
      host: "Cooper Union",
      link: "",
      title: "Calligraphy (Guest Instructor)",
      dates: "2017",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "Writing with Gradients",
      dates: "2017",
    },
  ];

  const teachingSplitIndex = Math.ceil(TEACHING_AND_WORKSHOPS.length / 2);

  const SPEAKING_ENGAGEMENTS = [
    {
      host: "MIT Media Lab",
      link: "",
      title: "Future Sketches Lunch Lectures",
      dates: "Sep 2023",
    },
    {
      host: "ATypI Paris",
      link: "",
      title: "Designing with Imperfect Machines",
      dates: "May 2023",
    },
    {
      host: "MassArt",
      link: "",
      title: "Communication Design Lecture Series",
      dates: "May 2023",
    },
    {
      host: "Letràstrica",
      link: "",
      title: "Perfection Doesn't Exist",
      dates: "Oct 2022",
    },
    {
      host: "Typographics",
      link: "",
      title: "Main Conference",
      dates: "Jun 2022",
    },
    {
      host: "Typographics TypeLab",
      link: "",
      title: "Vartype: Generative sketches for variable fonts",
      dates: "Jun 2022",
    },
    {
      host: "GRANSHAN",
      link: "",
      title: "Sign of the Times",
      dates: "May 2022",
    },
    {
      host: "Type Network",
      link: "",
      title: "Designing Tomorrow Today",
      dates: "Apr 2022",
    },
    {
      host: "Society of Scribes",
      link: "",
      title: "History and Anotomy of Flourishing",
      dates: "Mar 2021",
    },
    {
      host: "ATypI",
      link: "",
      title: "Type, Technology, and Beyond",
      dates: "Oct 2020",
    },
    {
      host: "Parsons School of Design",
      link: "",
      title: "CD Lecture Series",
      dates: "Sep 2020",
    },
    {
      host: "Parsons School of Design",
      link: "",
      title: "'History of the Latin Alphabet' Lecture Series",
      dates: "Sep 2020",
    },
    {
      host: "Typographics TypeLab",
      link: "",
      title: "Type, Technology, & Algorithms",
      dates: "Sep 2020",
    },
    {
      host: "Wayzgoose",
      link: "",
      title: "Material Creativity: Finding Inspiration in New Mediums",
      dates: "2019",
    },
    {
      host: "TypeCon",
      link: "",
      title: "History and Anatomy of Flourishing",
      dates: "2019",
    },
    {
      host: "Typographics TypeLab",
      link: "",
      title: "Behind the History of the Type Studio",
      dates: "2019",
    },
    {
      host: "Letterform Archive",
      link: "",
      title: "Letters: A Code System",
      dates: "2019",
    },
    {
      host: "TypeCon",
      link: "",
      title: "Reviving a Calligraphy Hand",
      dates: "2018",
    },
    {
      host: "Typographics TypeLab",
      link: "",
      title: "History of Flourishing",
      dates: "2017",
    },
    {
      host: "HUGE Inc",
      link: "",
      title: "Type Journey",
      dates: "2017",
    },
    {
      host: "Frog Design",
      link: "",
      title: "Creative Forum",
      dates: "2017",
    },
    {
      host: "Typographics: The Magazine",
      link: "",
      title: "Failures",
      dates: "2016",
    },
  ];

  const INTERVIEWS_AND_PRESS = [
    {
      host: "OHno Radio",
      link: "",
      dates: "2023",
    },
    {
      host: "I Love Typography (ILT)",
      link: "",
      dates: "2021",
    },
    {
      host: "Night Snack Club",
      link: "",
      dates: "2020",
    },
    {
      host: "League of Movable Type Podcast",
      link: "",
      dates: "2020",
    },
    {
      host: "Debugger",
      link: "",
      title: "Crowdfunding an Online Course During Quarantine",
      dates: "2020",
    },
    {
      host: "NaN",
      link: "",
      title: "Glyphzian Space",
      dates: "2020",
    },
    {
      host: "Letter Arts Review Vol. 33:4",
      link: "",
      dates: "2020",
    },
    {
      host: "ECV NY Masterclass",
      link: "",
      dates: "2019",
    },
    {
      host: "Communication Arts",
      link: "",
      dates: "2019",
    },
    {
      host: "Alphabet",
      link: "",
      dates: "2017",
    },
    {
      host: "Print Magazine",
      link: "",
      dates: "2017",
    },
    {
      host: "Typodarium",
      link: "",
      dates: "2017",
    },
    {
      host: "Letter Arts Review Vol. 31",
      link: "",
      dates: "2017",
    },
    {
      host: "TypeThursday",
      link: "",
      dates: "2016",
    },
    {
      host: "Art Directors Club",
      link: "",
      dates: "2016",
    },
    {
      host: "Working Not Working",
      link: "",
      dates: "2015",
    },
    {
      host: "Campaign US",
      link: "",
      dates: "2015",
    },
    {
      host: "KERA (NPR & PBS)",
      link: "",
      dates: "2015",
    },
    {
      host: "CMYK Magazine #7",
      link: "",
      dates: "2015",
    },
    {
      host: "CA Korea Magazine #183",
      link: "",
      dates: "2015",
    },
  ];

  const EXHIBITIONS = [
    {
      host: "Schick Art Gallery",
      link: "",
      title: "True to Type",
      dates: "2022",
    },
    {
      host: "Letràstrica",
      link: "",
      dates: "2022",
    },
    {
      host: "School for Poetic Computation",
      link: "",
      title: "Poetic Computation: Seven Years of SFPC",
      dates: "2020",
    },
    {
      host: "Found in Translation",
      link: "",
      dates: "2018",
    },
    {
      host: "Type Directors Club",
      link: "",
      title: "Ascenders",
      dates: "2018",
    },
    {
      host: "The Grolier Club",
      link: "",
      title: "The Calligraphy Revival",
      dates: "2017",
    },
  ];

  const PUBLICATION_FAIRS = [
    {
      host: "Hester Street Fair",
      link: "",
      dates: "Sep 2023",
    },
    {
      host: "Flamecon",
      link: "",
      dates: "Aug 2023",
    },
    {
      host: "Typographics Book Fair",
      link: "",
      dates: "Jun 2023",
    },
    {
      host: "Principles Vendor Market",
      link: "",
      dates: "Jun 2023",
    },
    {
      host: "Other Islands Book Fair",
      link: "",
      dates: "Apr 2023",
    },
  ];

  const Table = (items) => (
    <table className="table-auto col-span-6 min-w-full">
      <tbody>
        {items.map((info) => (
          <tr>
            <td>
              <a href={info.link}>{info.host}</a>
            </td>
            <td>{info.title}</td>
            <td>{info.dates}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <>
      <Head>
        <title>Space Type - About</title>
        <meta property="og:title" content="Space Type - About" />
      </Head>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "ST Felicette Regular", monospace;
          transition: color var(--theme-transition-time);
        }

        p,
        a,
        span,
        ul,
        input,
        td {
          font-family: "ST Monochromic", monospace;
          font-weight: 60;
          font-size: 0.8rem;
        }

        td {
          padding-block: 4px;
          border-bottom: 1px solid #333;
        }

        td:last-child {
          text-align: right;
        }

        td:not(:last-child),
        td a {
          padding-right: 5px;
          font-size: 0.7rem;
        }

        #nav-area a,
        .footer p,
        .footer a,
        .footer span,
        .footer ul,
        .footer input {
          font-family: "AdelleMonoFlex-Regular", monospace;
          font-size: reset;
        }

        .grid {
          max-width: none;
          margin: none;
        }
      `}</style>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <section className="fade-in content max-w-7xl">
              <div className="pt-12 grid grid-cols-12">
                <div
                  className="z-10 grid grid-cols-8"
                  style={{ gridColumn: "1 / span 8", gridRow: "1 / 1" }}
                >
                  {/* TODO: mobile responsive */}
                  <h1 className="felicette-bold text-3xl col-span-full mb-0 mt-4">
                    Space Type is an NYC-based studio practice operating at the
                    intersection of
                    <br className="hidden md:block" /> type and technology.
                  </h1>
                  <div
                    style={{
                      gridColumn: "1 / span 9",
                    }}
                  >
                    <p>
                      We work with individuals and organizations to express
                      unique narratives and connect the seams between type
                      design and digital interaction. We offer retail typefaces,
                      design custom type and lettering, build digital platforms,
                      and engage with communities and institutions through
                      workshops, classes, and donation-based resources.
                    </p>
                    <p>
                      We drive our craft and community through hand-crafted,
                      peer-driven connections that foster personal touch,
                      tactility, and interactivity with an openness for sharing
                      knowledge and resources.
                    </p>
                  </div>
                </div>
                <div
                  className="relative float-right rounded"
                  style={{ gridColumn: "7 / span 6", gridRow: "1 / 1" }}
                >
                  {/* TODO: resize image */}
                  <img
                    src="/img/about-cover-bao.jpg"
                    style={{ width: "100%", borderRadius: "10px" }}
                  ></img>
                </div>
              </div>
            </section>

            {/* overflow-hidden hack for float-right.. */}
            <section className="w-screen overflow-hidden">
              <div className="float-right">
                <img
                  src="/img/about-new/working-hard.png"
                  className="object-contain h-64 my-12"
                />
                <h1 className="text-3xl max-w-lg">
                  We’re mentors, builders, and organizers for every idea.
                </h1>
                <p className="max-w-lg">
                  We juggle graphic and UX design, creative coding,
                  systems-building, fabrication, printing, and education to go
                  from concept to production.
                </p>
                <p className="max-w-lg">
                  We advise non-profits and partner with businesses and creative
                  studios to ideate, prototype, and make digital visions a
                  reality; we lead the design of new typefaces with our peers
                  and former students; and we work with known institutions and
                  run our own programs and community events to bring
                  introductory & non-traditional type and technology education
                  to the masses.
                </p>
                <div className="flex flex-row items-start gap-x-2.5 max-h-lg mt-12">
                  <img
                    src="/img/about-new/pixel-type-ar.png"
                    className="grow object-contain  h-80"
                  />
                  {/* TODO: convert HDR image so it shows correctly */}
                  <img
                    src="/img/about-new/broadway-working.png"
                    className="grow object-contain h-80"
                  />
                  <img
                    src="/img/about-new/tapestry.png"
                    className="grow object-contain h-80"
                  />
                </div>
              </div>
            </section>

            <section className="content-wide max-w-7xl">
              <h1 className="text-3xl">Our Capabilities</h1>
              <div>
                <div className="max-w-2xl">
                  <p className="underline">Web Design and Development</p>
                  <p>
                    We can design, build, and ship your web presence from
                    beginning to end. We have experience through all stages of
                    the process and can jump in at any point, from designing
                    identity systems and layouts to building fast, functional,
                    and responsive applications. We work with low-code platforms
                    like Webflow, Squarespace, and Wix, as well as build and
                    maintain custom web and backend applications in a variety of
                    languages and frameworks.
                  </p>
                </div>
              </div>
              <div className="max-w-2xl">
                <p className="underline">
                  Interactive Digital Systems and Tools
                </p>
                <p>
                  We build playful, joyful, and surprising experiences that
                  challenge familiar notions of type, motion, and interactivity
                  on the web. We create everything from internal asset-exporting
                  tools to fully-generative experiences on the web.
                </p>
              </div>
              <div className="grid gap-8">
                <div className="col-span-6">
                  <p className="underline">
                    Branding, Identity & Typeface Design
                  </p>
                  <p>
                    We have nearly a decade of experience in lettering,
                    calligraphy, and typeface design. We offer retail typeface
                    licensing as well as custom branding and typeface design to
                    fit your unique identity.
                  </p>
                </div>
                <div className="col-span-6">
                  <p className="underline">Production and Publication</p>
                  <p>
                    We print and produce small-scale publications as well as
                    large-format murals, tapestries, and other physical goods to
                    express every message.
                  </p>
                </div>
              </div>
            </section>

            <section className="hidden" style={{ marginBottom: "4em" }}>
              <p>
                Community and education is at the heart of our practice. We
                teach workshops, run classes, and offer donation-based
                educational resources.
              </p>
              <p>
                We are dedicated to inclusive education, accessible technology,
                and open creative tools that empower all members of our
                community. We welcome fresh eyes, diverse backgrounds, and
                personal stories that reflect the many ways we interact with
                language in physical and online spaces.
              </p>
              <div className="grid" style={{ marginTop: "2em" }}>
                <Link href="https://typedesignschool.com">
                  <a className="tile tile-w-6 tile-h-6 grid-item rounded">
                    <img src="/img/type_a-z.gif" />
                    <div className="small-link">
                      Foundations of Type Design →
                    </div>
                  </a>
                </Link>

                <Link href="https://vartype.com">
                  <a className="tile tile-w-6 tile-h-6 grid-item rounded">
                    <img src="/img/vartype.gif" />
                    <div className="small-link">Vartype →</div>
                  </a>
                </Link>
              </div>
            </section>

            <div className="flex flex-row justify-center mb-24">
              <hr className="w-48 opacity-50" />
            </div>

            <section className="content-wide">
              <h1 className="text-3xl">Teaching and Workshops</h1>
              <div className="grid gap-6">
                {[0, 1].map((tableNum) =>
                  Table(
                    TEACHING_AND_WORKSHOPS.slice(
                      tableNum * teachingSplitIndex,
                      (tableNum + 1) * teachingSplitIndex
                    )
                  )
                )}
              </div>
              <div className="grid">
                <div className="col-span-6">
                  <h1 className="text-3xl">Select Speaking Engagements</h1>
                  {Table(SPEAKING_ENGAGEMENTS)}
                </div>{" "}
                <div className="col-span-6">
                  <h1 className="text-3xl">Interviews and Press</h1>
                  {Table(INTERVIEWS_AND_PRESS)}
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-x-2.5 max-h-lg my-12">
                <img
                  src="/img/about-new/speaking.png"
                  className="object-contain h-96"
                />
                {/* TODO: convert HDR image so it shows correctly */}
                <img
                  src="/img/about-new/exhibition.png"
                  className="object-contain h-96"
                />
              </div>
              <div className="max-w-lg">
                <h1 className="text-3xl">Select Exhibitions</h1>
                {Table(EXHIBITIONS)}
              </div>
              <div className="flex flex-row items-end justify-end gap-x-2.5 max-h-lg min-w-full my-12">
                <img
                  src="/img/about-new/zine-table.png"
                  className="object-contain h-96"
                />
                {/* TODO: convert HDR image so it shows correctly */}
                <img
                  src="/img/about-new/zine-hester-st-fair.png"
                  className="object-contain h-96"
                />
              </div>
              <div className="flex flex-row justify-end">
                <div className="max-w-lg" style={{ minWidth: "32rem" }}>
                  <h1 className="text-3xl">Publication Fairs</h1>
                  {Table(PUBLICATION_FAIRS)}
                </div>
              </div>
            </section>

            <section>
              <h3>Upcoming Workshops</h3>
              <p>
                <ul className="list-basic subtext">
                  <li>
                    <Link href="https://www.typeelectives.com/courses/intro-to-generative-typography-with-p5js-sp-23">
                      Type Electives
                    </Link>{" "}
                    - Intro to Generative Typography with p5.js, Jan-Apr 2023
                  </li>
                </ul>
              </p>
              <h3>Previous offerings</h3>
              <div className="grid">
                <Link href="https://letterformdesign.com">
                  <a className="tile tile-w-6 tile-h-6 grid-item rounded">
                    <img data-src="/img/letterformdesign" data-fmt="png" />
                    <div className="small-link">Type Design & Lettering →</div>
                  </a>
                </Link>

                <Link href="https://generativetype.com">
                  <a className="tile tile-w-6 tile-h-6 grid-item rounded">
                    <img data-src="/img/generativetype" data-fmt="png" />
                    <div className="small-link">Generative Typography →</div>
                  </a>
                </Link>
              </div>
              <p>
                <ul className="list-basic subtext">
                  <li>
                    <Link href="https://www.letrastica.com/en/eventos/introduccion-tipografia-generativa-p5js">
                      Letrastica
                    </Link>{" "}
                    - Generative Typography, Oct 2022
                  </li>
                  <li>
                    <Link href="https://letterformarchive.org/education/">
                      Letterform Archive
                    </Link>{" "}
                    - Type West: Type Design, Jun–Aug 2022
                  </li>
                  <li>
                    <Link href="https://letterformarchive.org/events/view/in-person-core-prototyping-letterforms">
                      Letterform Archive
                    </Link>{" "}
                    - Prototyping Letterforms, Jun 25–26 2022
                  </li>
                  <li>
                    <Link href="https://letterformarchive.org/events/view/designing-flourishes2">
                      Letterform Archive
                    </Link>{" "}
                    - Flourishing, Jun 22–23 2022
                  </li>
                  <li>
                    <Link href="https://2022.typographics.com/workshops/">
                      Typographics
                    </Link>{" "}
                    - Code x Kinetic Type, Jun 13-15 2022
                  </li>
                  <li>
                    <Link href="http://coopertype.org/event/generative_type_sp2021">
                      Type@Cooper
                    </Link>{" "}
                    - Generative Typography, Feb–Apr 2022
                  </li>
                  <li>
                    <Link href="https://courses.newschool.edu/courses/PSAM3010">
                      Parsons School of Design
                    </Link>{" "}
                    - Type Design, Jan–May 2022
                  </li>
                  <li>
                    <Link href="https://2021.typographics.com/workshops/">
                      Typographics
                    </Link>{" "}
                    – Code x Typography Series, Jun 2021
                  </li>
                  <li>
                    <Link href="https://letterformarchive.org/education/">
                      Letterform Archive
                    </Link>{" "}
                    - Type West: Type Design, Jun–Aug 2021
                  </li>
                  <li>
                    <Link href="https://courses.newschool.edu/courses/PSAM3010">
                      Parsons School of Design
                    </Link>{" "}
                    - Type Design, Jan–May 2021
                  </li>
                  <li>
                    <Link href="http://coopertype.org/event/generative_type_fall2020">
                      Type@Cooper
                    </Link>{" "}
                    - Generative Typography, Oct–Dec 2020
                  </li>
                  <li>
                    <Link href="http://coopertype.org/event/generative_typography">
                      Type@Cooper
                    </Link>{" "}
                    - Generative Typography, Jun–Jul 2020
                  </li>
                  <li>
                    <Link href="http://coopertype.org/event/hand_lettering">
                      Type@Cooper
                    </Link>{" "}
                    - Hand Lettering, Feb–Apr 2020
                  </li>
                </ul>
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

About.displayName = "About";
export default About;
