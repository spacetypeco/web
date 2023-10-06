import Head from "next/head";
import Link from "next/link";
import useImageSizer from "../hooks/useImageSizer";
import useLogo from "../hooks/useLogo";

function About() {
  useLogo();
  useImageSizer();

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
        input {
          font-family: "ST Monochromic", monospace;
          font-weight: 60;
          font-size: 0.8em;
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

            <section className="content max-w-7xl">
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
              <div>
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
