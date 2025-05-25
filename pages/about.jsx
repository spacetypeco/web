import Head from "next/head";
import Link from "next/link";
import ResponsiveImage from "../components/ResponsiveImage";
import Video from "../components/Video";
import useImageSizer from "../hooks/useImageSizer";
import useLogo from "../hooks/useLogo";

const RANDOM_CHARS = "▣◩◪▧◰".split("");

const randInt = (start, end) => {
  return start + Math.floor(Math.random() * (end - start));
};

const randomChar = () => {
  return RANDOM_CHARS[randInt(0, RANDOM_CHARS.length)];
};

const randomString = () => {
  return Array(randInt(20, 40))
    .fill()
    .map((_, i) => (i % 2 === 0 ? randomChar() : " "));
};

function About() {
  useLogo();
  useImageSizer();

  const TEACHING_AND_WORKSHOPS = [
    {
      host: "Jersey Art Book Fair",
      link: "https://www.jerseyartbookfair.org/",
      title: "Pixel Type Workshop",
      dates: "Feb 2025",
    },
    {
      host: "University of Connecticut",
      link: "https://uconn.edu/",
      title: "Intro to p5.js",
      dates: "Jan-Feb 2025",
    },
    {
      host: "Bronx Museum of the Arts",
      link: "https://bronxmuseum.org/learn/",
      title: "Type Design Workshops",
      dates: "Nov 2024",
    },
    {
      host: "Type Electives",
      link: "https://www.typeelectives.com/courses/techniculture-sp-24",
      title:
        "Techniculture: A Critical Lens on Modular Type and Generative Design",
      dates: "Feb-Mar 2024",
    },
    {
      host: "Parsons School of Design",
      link: "https://courses.newschool.edu/courses/PSAM3060/",
      title: "Currents: CD Workshop (Machine Learning)",
      dates: "Oct-Nov 2023",
    },
    {
      host: "Processing Foundation",
      link: "https://medium.com/@ProcessingOrg/announcing-google-summer-of-code-2023-mentors-4d126e35a23d",
      title: "GSoC Typography Mentorship",
      dates: "Jun-Aug 2023",
    },
    {
      host: "Type Electives",
      link: "https://www.typeelectives.com/events/pixel-type-workshop-tickets-559039039817",
      title: "Pixel Type Workshop",
      dates: "Mar 2023",
    },
    {
      host: "Type Electives",
      link: "https://www.typeelectives.com/courses/intro-to-generative-typography-with-p5js-sp-23",
      title: "Intro to Generative Typography with p5.js",
      dates: "Jan-Apr 2023",
    },
    {
      host: "Letràstrica",
      link: "https://www.letrastica.com/en/festival-4",
      title: "Generative Typography",
      dates: "Oct 2022",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/type-west-online/",
      title: "Type West: Type Design",
      dates: "Jun-Aug 2022",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/events/view/in-person-core-prototyping-letterforms/",
      title: "In-Person Core: Prototyping Letterforms",
      dates: "Jun 2022",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/shop/the-basics-of-designing-flourishes/",
      title: "Designing Flourishes",
      dates: "Jun 2022",
    },
    {
      host: "Typographics",
      link: "http://coopertype.dreamhosters.com/events/code_x_kinetic_type_su2022",
      title: "Code x Kinetic Type",
      dates: "Jun 2022",
    },
    {
      host: "Type@Cooper",
      link: "http://coopertype.dreamhosters.com/events/generative_type_sp2021",
      title: "Generative Typography",
      dates: "Feb-Apr 2022",
    },
    {
      host: "Parsons School of Design",
      link: "https://courses.newschool.edu/courses/PSAM3010",
      title: "CD Studio: Typeface Design",
      dates: "Jan-May 2022",
    },
    {
      host: "Typographics",
      link: "https://github.com/spacetypeco/kinetic-type-SU21",
      title: "Code x Kinetic Type",
      dates: "Jun 2021",
    },
    {
      host: "Typographics",
      link: "http://coopertype.dreamhosters.com/events/code_x_glitch_type",
      title: "Code x Glitch Type",
      dates: "Jun 2021",
    },
    {
      host: "Typographics",
      link: "http://coopertype.dreamhosters.com/events/code_x_variable_fonts",
      title: "Code x Variable Fonts",
      dates: "Jun 2021",
    },
    {
      host: "Society of Scribes",
      link: "https://www.youtube.com/watch?v=JQ9oceOyuDk",
      title: "The History and Anatomy of Flourishing",
      dates: "Mar 2021",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/type-west-online/",
      title: "Type West: Type Design",
      dates: "Jun-Aug 2021",
    },
    {
      host: "Parsons School of Design",
      link: "https://courses.newschool.edu/courses/PSAM3010",
      title: "Type Design",
      dates: "Jan-May 2021",
    },
    {
      host: "Type@Cooper",
      link: "https://github.com/spacetypeco/generative-typography-FA20",
      title: "Generative Typography",
      dates: "Oct-Dec 2020",
    },
    {
      host: "Type@Cooper",
      link: "https://github.com/spacetypeco/generative-typography-SU20",
      title: "Generative Typography",
      dates: "Jun-Jul 2020",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/",
      title: "Intro to Lettering",
      dates: "Jun 2020",
    },
    {
      host: "Society of Scribes",
      link: "https://www.societyofscribes.org/calendar/designing-flourishes-spring2020-1",
      title: "Designing Flourishes",
      dates: "May 2020",
    },
    {
      host: "Type@Cooper",
      link: "https://coopertype.org/workshops/",
      title: "Hand Lettering",
      dates: "Feb-Apr 2020",
    },
    {
      host: "Parsons School of Design",
      link: "https://courses.newschool.edu/courses/PSAM3010",
      title: "Type Design",
      dates: "2020",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/",
      title: "Type West Core Workshop",
      dates: "2020",
    },
    {
      host: "Society of Scribes",
      link: "https://www.societyofscribes.org/prototyping-letterforms-with-unconventional-tools",
      title: "Prototyping Letteforms with Unconventional Tools",
      dates: "2019",
    },
    {
      host: "Type@Cooper",
      link: "https://coopertype.org/workshops/",
      title: "Calligraphy: Italic and Bâtarde",
      dates: "2019",
    },
    {
      host: "Ladies Wine & Design",
      link: "https://ladieswinedesign.com/brooklyn/",
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
      link: "http://ladieswinedesign.com/",
      title: "Calligraphy: Historical Hands",
      dates: "2019",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/",
      title: "Calligraphy as a Tool for Prototyping Letterforms",
      dates: "2019",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/",
      title: "Designing Flourishes",
      dates: "2019",
    },
    {
      host: "ECV Paris",
      link: "https://medium.com/ecvny/2019-new-york-typographic-tour-schedule-cdf860e103e8",
      title: "Masterclass",
      dates: "2019",
    },
    {
      host: "Type@Cooper",
      link: "http://coopertype.dreamhosters.com/events/calligraphy_blackletter_fundamentals",
      title: "Calligraphy: Blackletter Fundamentals",
      dates: "2019",
    },
    {
      host: "HUGE Inc",
      link: "http://www.hugeinc.com/",
      title: "Blackletter Calligraphy",
      dates: "2018",
    },
    {
      host: "Society of Scribes",
      link: "http://societyofscribes.org/",
      title: "Basics of Blackletter",
      dates: "2017",
    },
    {
      host: "Society of Scribes",
      link: "http://societyofscribes.org/",
      title: "Flourishing Design",
      dates: "2017",
    },
    {
      host: "TypeCon",
      link: "https://www.typecon.com/",
      title: "Flourishing Design",
      dates: "2017",
    },
    {
      host: "Society of Scribes",
      link: "https://www.societyofscribes.org/",
      title: "Writing with Gradients",
      dates: "2017",
    },
  ];

  const teachingSplitIndex = Math.ceil(TEACHING_AND_WORKSHOPS.length / 2);

  const SPEAKING_ENGAGEMENTS = [
    {
      host: "Pioneer Works",
      link: "https://pioneerworks.org/programs/software-for-artists-day-8",
      title: "Software for Artists Day",
      dates: "Nov 2023",
    },
    {
      host: "Adobe MAX",
      link: "https://www.adobe.com/max/2023/sessions/na-generative-typography-creative-technology-as-mu-vs305.html",
      title: "Generative Typography: Creative Technology as Muse",
      dates: "Oct 2023",
      videoLink:
        "https://www.adobe.com/max/2023/sessions/na-generative-typography-creative-technology-as-mu-vs305.html",
    },
    {
      host: "MIT Media Lab",
      link: "https://www.media.mit.edu/posts/lunch-lectures-computational-typography/",
      title: "Future Sketches: Computational Typography Lunch Lectures",
      dates: "Sep 2023",
      videoLink: "https://www.youtube.com/watch?v=nlKJPWGQGkc",
    },
    {
      host: "ATypI Paris",
      link: "https://atypi.org/presentation/ghost-glitch-or-muse-designing-with-fallible-machines/",
      title: "Designing with Fallible Machines",
      dates: "May 2023",
      videoLink: "https://www.youtube.com/watch?v=0r9OboZuIUg",
    },
    {
      host: "MassArt",
      link: "https://massart.edu/academics/programs/communication-design",
      title: "Communication Design Lecture Series",
      dates: "May 2023",
    },
    {
      host: "Letràstrica",
      link: "https://www.letrastica.com/en/festival-4",
      title: "Perfection Doesn't Exist",
      dates: "Oct 2022",
    },
    {
      host: "Typographics",
      link: "https://2022.typographics.com/",
      title: "Main Conference",
      dates: "Jun 2022",
      videoLink: "https://www.youtube.com/watch?v=4YcT3C6a3QA",
    },
    {
      host: "Typographics TypeLab",
      link: "https://2022.typographics.com/typelab/",
      title: "Vartype: Generative sketches for variable fonts",
      dates: "Jun 2022",
    },
    {
      host: "GRANSHAN",
      link: "https://signs-of-the-times.net/",
      title: "Sign of the Times",
      dates: "May 2022",
      videoLink: "https://www.youtube.com/watch?v=jw4avHNFJ8w",
    },
    {
      host: "Type Network",
      link: "https://typenetwork.com/articles/our-video-series-on-variable-fonts",
      title: "Designing Tomorrow Today",
      dates: "Apr 2022",
      videoLink:
        "https://typenetwork.com/articles/designing-with-variable-fonts-designing-tomorrow-today",
    },
    {
      host: "Society of Scribes",
      link: "https://www.societyofscribes.org/blog/2021-annual-general-meeting-flourishing-lynne-yun",
      title: "History and Anotomy of Flourishing",
      dates: "Mar 2021",
      videoLink: "https://www.youtube.com/watch?v=JQ9oceOyuDk",
    },
    {
      host: "ATypI",
      link: "https://atypi.org/conferences-events/past-conferences/atypi-all-over-2020/",
      title: "Type, Technology, and Beyond",
      dates: "Oct 2020",
      videoLink: "https://www.youtube.com/watch?v=ODWYhDC_GFQ",
    },
    {
      host: "Parsons School of Design",
      link: "https://event.newschool.edu/onlineparsonscdlectureseries",
      title: "Communication Design Lecture Series",
      dates: "Sep 2020",
      videoLink: "https://www.youtube.com/watch?v=NwVhOxKtwbg",
    },
    {
      host: "Parsons School of Design",
      link: "https://newschool.edu",
      title: "'History of the Latin Alphabet' Lecture Series",
      dates: "Sep 2020",
      videoLink: "https://typedesignschool.com/usage/curriculum/Section_6",
    },
    {
      host: "Typographics TypeLab",
      link: "http://typographics.com/",
      title: "Type, Technology, & Algorithms",
      dates: "Sep 2020",
    },
    {
      host: "Wayzgoose",
      link: "https://woodtype.org/pages/wayzgoose",
      title: "Material Creativity: Finding Inspiration in New Mediums",
      dates: "2019",
      videoLink: "https://www.youtube.com/watch?v=5loIss8n4bY",
    },
    {
      host: "TypeCon",
      link: "https://www.typecon.com/",
      title: "History and Anatomy of Flourishing",
      dates: "2019",
    },
    {
      host: "Typographics TypeLab",
      link: "https://typographics.com/",
      title: "Behind the History of the Type Studio",
      dates: "2019",
    },
    {
      host: "Letterform Archive",
      link: "https://letterformarchive.org/events/view/letters-a-code-system/",
      title: "Letters: A Code System",
      dates: "2019",
      videoLink: "https://www.youtube.com/watch?v=kjsR8tEj4Rg",
    },
    {
      host: "TypeCon",
      link: "https://www.typecon.com/",
      title: "Reviving a Calligraphy Hand",
      dates: "2018",
      videoLink: "https://www.youtube.com/watch?v=mKyulbXhF0E",
    },
    {
      host: "Typographics TypeLab",
      link: "https://typographics.com/",
      title: "History of Flourishing",
      dates: "2017",
    },
    {
      host: "HUGE Inc",
      link: "https://www.hugeinc.com/",
      title: "Type Journey",
      dates: "2017",
    },
    {
      host: "Frog Design",
      link: "https://frogdesign.com/",
      title: "Creative Forum",
      dates: "2017",
    },
    {
      host: "Typographics: The Magazine",
      link: "https://typographics.com",
      title: "Failures",
      dates: "2016",
    },
  ];

  const INTERVIEWS_AND_PRESS = [
    {
      host: "Pioneer Works x SFPC",
      title: "Software for Artists: In Poetic Coalition",
      link: "https://store.pioneerworks.org/products/s4ad-poetic-coalition",
      dates: "2023",
    },
    {
      host: "NEW INC x Rhizome",
      link: "https://www.newinc.org/members",
      title: "Year 10 - Art & Code Member",
      dates: "2023",
    },

    {
      host: "OHno Radio",
      link: "https://ohnotype.co/blog/ohno-radio-episode-25-type-electives",
      dates: "2023",
    },
    {
      host: "I Love Typography (ILT)",
      link: "https://ilovetypography.com/2021/03/08/women-of-letters/",
      dates: "2021",
    },
    {
      host: "Night Snack Club",
      link: "https://www.nightsnackclub.com/blog/lynneyun",
      dates: "2020",
    },
    {
      host: "League of Movable Type Podcast",
      link: "https://www.theleagueofmoveabletype.com/podcast/s2e13---interview-with-type-designer--educator-lynne-yun",
      dates: "2020",
    },
    {
      host: "Debugger",
      link: "https://debugger.medium.com/crowd-funding-an-online-course-with-low-budget-and-a-lot-of-elbow-grease-in-2020-809f08f509df",
      title: "Crowdfunding an Online Course During Quarantine",
      dates: "2020",
    },
    {
      host: "NaN",
      link: "https://nan.xyz/txt/glyphzian-space/",
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
      link: "https://vimeo.com/326059621",
      dates: "2019",
    },
    {
      host: "Communication Arts",
      link: "https://www.commarts.com/favorites/five-typographers-share-their-treasured-finds-3",
      dates: "2019",
    },
    {
      host: "Alphabet",
      link: "",
      dates: "2017",
    },
    {
      host: "Print Magazine",
      link: "https://www.dropbox.com/s/eexcqfw2pvlmg58/PRINT%20Mag%20Summer2017%20Excerpt.pdf?dl=0",
      dates: "2017",
    },
    {
      host: "Typodarium",
      link: "https://www.dropbox.com/s/4jicdvwlc09zk9p/Letter_Arts_Review_2017.pdf?dl=0",
      dates: "2017",
    },
    {
      host: "Letter Arts Review Vol. 31",
      link: "",
      dates: "2017",
    },
    {
      host: "TypeThursday",
      link: "https://medium.com/type-thursday/go-backwards-to-go-forward-an-interview-with-graphic-designer-lynne-yun-cd2361202400#.9h219pi8h",
      dates: "2016",
    },
    {
      host: "Art Directors Club",
      link: "http://adcglobal.org/lynne-yun-chance-destiny/",
      dates: "2016",
    },
    {
      host: "Working Not Working",
      link: "http://freerange.workingnotworking.com/blog/2015/5/11/9jzv50x1ilwh4r43vi3gh0dlrcfmlm",
      dates: "2015",
    },
    {
      host: "Campaign US",
      link: "",
      dates: "2015",
    },
    {
      host: "KERA (NPR & PBS)",
      link: "http://keranews.org/post/designers-placeholder-lorem-ipsum-sense-poetry",
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
      host: "Bronx Museum",
      link: "https://bronxmuseum.org/exhibition/working-knowledge/",
      title: "Working Knowledge: Shared Imaginings, New Futures",
      dates: "2025",
    },
    {
      host: "Museum of the Moving Image",
      link: "https://movingimage.org/event/thingyou/",
      title: "THING x YOU (Development Support)",
      dates: "2025",
    },
    {
      host: "Plexus Projects",
      link: "https://www.plexusprojects.org/gui-gooey-2024",
      title: "GUI/GOOEY",
      dates: "2024",
    },
    {
      host: "Neighbor",
      title: "Meek Defiance",
      dates: "2024",
    },
    {
      host: "Schick Art Gallery",
      link: "https://www.skidmore.edu/schick/2022-2023/true-type-exhibition.php",
      title: "True to Type",
      dates: "2022",
    },
    {
      host: "Letràstrica",
      link: "https://www.letrastica.com/en/festival-4",
      title: "Collective Exhibition",
      dates: "2022",
    },
    {
      host: "School for Poetic Computation",
      link: "https://sfpc.io/sevenyears/",
      title: "Poetic Computation: Seven Years of SFPC",
      dates: "2020",
    },
    {
      host: "Korean Cultural Center New York",
      link: "https://www.koreanculture.org/gallery-korea/2018/8/16/found-in-translation",
      title: "Found in Translation",
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
    {
      host: "Type Directors Club",
      link: "",
      title: "TDC 62",
      dates: "2016",
    },
    {
      host: "Type Directors Club",
      link: "",
      title: "TDC 60",
      dates: "2014",
    },
  ];

  const PUBLICATION_FAIRS = [
    {
      host: "Seoul Publisher's Table",
      link: "https://publisherstable.kr/",
      dates: "Oct 2025",
    },
    {
      host: "Riso Art & Zine (RAZ) Fest @ Gallery Nucleus",
      link: "https://gallerynucleus.com/events/1090",
      dates: "Sept 2025",
    },
    {
      host: "Anime NYC",
      link: "https://animenyc.com/",
      dates: "Aug 2025",
    },
    {
      host: "Smol Art Mart",
      link: "https://smolartmart.carrd.co/",
      dates: "Aug 2025",
    },
    {
      host: "ACE Popup Market @ Asian Creative Festival",
      link: "https://www.acepopup.com/",
      dates: "May 2025",
    },
    {
      host: "Printed Matter - LA Art Book Fair",
      link: "https://printedmatterartbookfairs.org/",
      dates: "May 2025",
    },
    {
      host: "Seattle Art Book Fair",
      link: "http://seattleartbookfair.org/",
      dates: "May 2025",
    },
    {
      host: "RISO Expo Philly",
      link: "https://www.phillysoapbox.org/riso-expo-philly",
      dates: "May 2025",
    },
    {
      host: "Welcome to Chinatown x Poster House - Print (Night) Market",
      link: "https://posterhouse.org/event/first-friday-night-market-curated-by-welcome-to-chinatown/",
      dates: "May 2025",
    },
    {
      host: "Multiple Formats Art Book Fair",
      link: "https://multipleformats.cargo.site/",
      dates: "March 2025",
    },
    {
      host: "Jersey Art Book Fair",
      link: "https://www.jerseyartbookfair.org/",
      dates: "Feb 2025",
    },
    {
      host: "Pyperbleu - Heart to Heart Market",
      link: "https://www.instagram.com/p/DGDy1wsxcoz",
      dates: "Feb 2025",
    },
    {
      host: "Welcome to Chinatown - Lunar New Years Fair",
      link: "https://welcometochinatown.com/lunarnewyear",
      dates: "Feb 2025",
    },
    {
      host: "Pioneer Works - Press Play",
      link: "https://pioneerworks.org/programs/press-play-2024",
      dates: "Dec 2024",
    },
    {
      host: "Sunnyday Art Market",
      link: "https://partiful.com/e/eJznGzQckcTveRB2fIHR",
      dates: "Sept 2024",
    },
    {
      host: "Multiple Formats Art Book Fair",
      link: "https://multipleformats.cargo.site/",
      dates: "Mar 2024",
    },
    {
      host: "Pioneer Works - Press Play",
      link: "https://pioneerworks.org/programs/press-play-2023",
      dates: "Dec 2023",
    },
    {
      host: "Lucky Risograph - Lucky & Friends Holiday Market",
      link: "https://www.instagram.com/p/CzrzA9eOHqt/",
      dates: "Dec 2023",
    },
    {
      host: "Pioneer Works x SFPC - S4AD Art Fair",
      link: "https://pioneerworks.org/programs/software-for-artists-day-8",
      dates: "Nov 2023",
    },
    {
      host: "Hester Street Fair",
      link: "https://www.hesterstreetfair.com/events/zine-fair-with-commercial-type-and-dahsar",
      dates: "Sep 2023",
    },
    {
      host: "Flamecon",
      link: "https://www.flamecon.org/",
      dates: "Aug 2023",
    },
    {
      host: "Typographics Book Fair",
      link: "https://2023.typographics.com/book_fair/",
      dates: "Jun 2023",
    },
    {
      host: "Principles Vendor Market",
      link: "https://www.instagram.com/principlesbk",
      dates: "Jun 2023",
    },
    {
      host: "Other Islands Book Fair",
      link: "https://designfuture.space/events/otherislands/",
      dates: "Apr 2023",
    },
  ];

  const Table = (items) => (
    <table className="table-fixed col-span-6 min-w-full">
      <tbody>
        {items.map((info) => (
          <tr>
            <td>
              {info.link ? <a href={info.link}>{info.host}</a> : info.host}
            </td>
            <td className={info.title ? "" : "opacity-25"}>
              {info.title}
              {info.videoLink ? (
                <>
                  {" "}
                  (
                  <Link href={info.videoLink}>
                    <a>video</a>
                  </Link>
                  )
                </>
              ) : (
                ""
              )}
            </td>
            <td style={{ width: "6rem" }}>{info.dates}</td>
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
        input {
          font-family: "ST Monochromic", monospace;
          font-weight: 60;
          font-size: 1rem;
        }

        td {
          padding-block: 4px;
          border-bottom: 1px solid #333;
        }

        td:last-child {
          text-align: right;
        }

        td:not(:last-child) {
          padding-right: 5px;
        }

        td,
        td a {
          font-family: "ST Monochromic", monospace;
          font-weight: 60;
          font-size: 0.7rem;
        }

        #nav-area a {
          font-family: "AdelleMonoFlex-Regular", monospace;
          font-weight: normal;
        }

        .footer p,
        .footer a,
        .footer span,
        .footer ul,
        .footer input {
          font-family: "AdelleMonoFlex-Regular", monospace;
          font-weight: normal;
          font-size: 0.8rem;
        }

        .grid {
          max-width: none;
          margin: 0;
        }

        .about-intro--image {
          grid-column: 7 / span 6;
          grid-row: 1 / 1;
        }

        .about-intro--text {
          grid-column: 1 / span 12;
          grid-row: 1 / 1;
        }

        .about-intro--text-subtext {
          grid-column: 1 / span 6;
        }

        @media (max-width: 1048px) {
          .about-intro--text-subtext {
            grid-column: 1 / span 10;
          }
          .about-intro--image {
            grid-column: 4 / span 8;
          }
          .about-intro--text {
            grid-row: 2 / span 1;
          }

          p,
          a,
          span,
          ul,
          input {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 768px) {
          .about-intro--text-subtext {
            grid-column: 1 / span 12;
          }
          .about-intro--image {
            grid-column: 1 / span 12;
          }
        }

        @media (min-width: 768px) {
          .builders-img {
            height: calc(min(28rem, 100vw * 0.3));
          }
        }

        @media (max-width: 768px) {
          .group .builders-img {
            height: calc(100vw * 0.6);
          }
        }

        @media (min-width: 1900px) {
          p,
          a,
          span,
          ul,
          input {
            font-size: 1.2rem;
          }

          td,
          td a {
            font-size: 0.85rem;
          }
        }
      `}</style>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <div id="about" className="mb-24">
            <section className="fade-in content-top md:flex flex-row justify-center lg:px-12">
              <div className="3xl:pt-6 lg-content-uber-about-size">
                <div className="pt-4 md:pt-12 grid grid-cols-12 auto-rows-auto">
                  <div className="relative float-right tile rounded rounded--mobile-full-bleed about-intro--image">
                    <ResponsiveImage
                      src="/img/about-cover-bao.png"
                      sizes="(max-width: 768px) 50vw, (max-width: 1900px) 30vw, 600px"
                    ></ResponsiveImage>
                  </div>
                  <div
                    className="z-10 grid-cols-12 about-intro--text content-wide-mobile"
                    style={{ display: "grid" }}
                  >
                    <h1 className="felicette-bold text-3xl md:text-5xl 3xl:text-6xl col-span-11 md:col-span-10 lg:col-span-8 mb-0 mt-8 md:mt-16 3xl:mt-20 ml-0 md:ml-12 lg:ml-0">
                      Space Type is an NYC-based studio practice operating at
                      the intersection
                      <br className="hidden 3xl:block 3xl:hidden" /> of type and
                      technology.
                    </h1>
                    <div className="mt-4 lg:mt-12 xl:mt-0 about-intro--text-subtext pr-8 ml-0 md:ml-12 lg:ml-0">
                      <p>
                        We work with individuals and organizations to express
                        unique narratives and connect the seams between type
                        design and digital interaction. We offer retail
                        typefaces, design custom type and lettering, build
                        digital and generative platforms, and engage with
                        communities and institutions through workshops, classes,
                        and donation-based resources.
                      </p>
                      <p>
                        We drive our craft and community through hand-crafted,
                        peer-driven connections that foster personal touch,
                        tactility, and interactivity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* overflow-hidden hack for float-right.. */}
            <section className="w-screen overflow-hidden mb-24 lg:mt-24 lg:mb-48 mobile:content-wide">
              <div className="md:ml-12 md:float-right content-wide-mobile">
                <img
                  src="/img/about-new/working-hard.png"
                  // sizes="200px"
                  // containerClassNames="h-64 mt-24 mb-6 lg:my-12"
                  // style={{
                  //   height: "16rem !important",
                  // }}
                  className="h-64 mt-24 mb-6 lg:my-12"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-lg lg:max-w-2xl">
                  We’re mentors, builders, and organizers for every idea.
                </h1>
                <p className="max-w-xl 3xl:max-w-2xl">
                  We juggle graphic and UX design, creative coding,
                  systems-building, fabrication, printing, and education to go
                  from concept to production.
                </p>
                <p className="max-w-xl 3xl:max-w-2xl">
                  We advise non-profits and partner with businesses and creative
                  studios to ideate, prototype, and make digital visions a
                  reality; we lead the design of new typefaces with our peers
                  and former students; and we work with known institutions and
                  run our own programs and community events to bring
                  introductory & non-traditional type and technology education
                  to the masses.
                </p>
                <div className="flex md:flex-row flex-col items-start gap-1 md:gap-2 mt-12">
                  <div className="flex flex-row gap-2 group">
                    <div>
                      <img
                        src="/img/about-new/pixel-type-ar.png"
                        className="grow object-contain builders-img"
                      />
                    </div>
                    {/* TODO: convert HDR image so it shows correctly */}
                    <div>
                      <img
                        src="/img/about-new/broadway-working.png"
                        className="grow object-contain builders-img"
                      />
                    </div>
                  </div>
                  <div>
                    <img
                      src="/img/about-new/tapestry.png"
                      className="grow object-contain builders-img"
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="lg:flex justify-center">
              <section className="content-wide content-wide-mobile lg-content-uber-uber-wide">
                <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-lg lg:max-w-2xl mt-24">
                  Our Capabilities
                </h1>
                <div>
                  <div className="max-w-2xl 3xlmax-w-4xl">
                    <p className="underline">
                      Interactive Systems and Generative Tools
                    </p>
                    <p>
                      We build playful, joyful, and surprising experiences that
                      challenge familiar notions of type, motion, and
                      interaction on the web. We create everything from internal
                      generative design tools to fully-interactive experiences
                      on the web.
                    </p>
                  </div>
                  <div
                    className="flex flex-col lg:grid grid-cols-12 mt-8 mb-16 gap-2 md:gap-0"
                    style={{
                      minWidth: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    <div className="col-span-6">
                      <a href="https://typeelectives.com">
                        <Video
                          datasrc="/works/2023-client-type-electives/type-electives-web-crop"
                          style={{
                            objectFit: "fill",
                            width: "100%",
                            // height: "100%",
                          }}
                        />
                      </a>
                    </div>
                    <div
                      className="col-span-6 items-center"
                      style={{
                        display: "grid",
                        backgroundColor: "#1E3432",
                      }}
                    >
                      <div className="relative">
                        <a href="https://chalk.ai">
                          <Video
                            datasrc="/works/2023-client-chalk/chalk-full-crop"
                            style={{
                              objectFit: "contain",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </a>
                        <div
                          style={{
                            backgroundColor: "#1E3432",
                            width: "100%",
                            height: "5px",
                            position: "absolute",
                            top: 0,
                            zIndex: 10,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div
                      className="col-span-6 items-center"
                      style={{
                        display: "grid",
                        backgroundColor: "#D8E2DC",
                      }}
                    >
                      <div className="relative">
                        <Link href="/work/2022-vartype">
                          <a>
                            <Video
                              datasrc="/works/2022-tool-vartype/fitv2"
                              style={{
                                objectFit: "fill",
                                width: "100%",
                                // height: "100%",
                              }}
                            />
                            <div
                              style={{
                                backgroundColor: "#D8E2DC",
                                width: "100%",
                                height: "5px",
                                position: "absolute",
                                top: 0,
                                zIndex: 10,
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#D8E2DC",
                                width: "5px",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                zIndex: 30,
                              }}
                            ></div>
                            <div
                              style={{
                                backgroundColor: "#D8E2DC",
                                width: "10px",
                                height: "100%",
                                position: "absolute",
                                top: 0,
                                right: 0,
                                zIndex: 30,
                              }}
                            ></div>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-span-6">
                      <Link href="/work/2022-existentialco">
                        <a>
                          <Video
                            datasrc="/works/2022-client-web-existential/cover"
                            style={{
                              objectFit: "fill",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="max-w-2xl 3xl:max-w-4xl">
                    <p className="underline">Web Design and Development</p>
                    <p>
                      We can design, build, and ship your web presence from
                      beginning to end. We have experience through all stages of
                      the process and can jump in at any point, from designing
                      identity systems and layouts to building fast, functional,
                      and responsive applications.
                    </p>
                    <p>
                      We work with low-code platforms like Webflow, Squarespace,
                      and Wix, as well as build and maintain custom web and
                      backend applications in a variety of languages and
                      frameworks.
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row items-start gap-2 md:gap-1 mt-8 mb-16">
                    <a href="https://blackhillsjustice.org">
                      <div className="md:max-w-full">
                        <img src="/img/about-new/web-dev-bhj-faq.png" />
                      </div>
                    </a>
                    <div className="md:max-w-full">
                      <img src="/img/about-new/web-dev-type-electives.png" />
                    </div>
                    <div className="md:max-w-full">
                      <img src="/img/about-new/web-dev-existential-ui.png" />
                    </div>
                  </div>
                </div>
                <div className="lg:grid grid-cols-12 gap-24 mb-16 md:mb-0">
                  <div className="col-span-6">
                    <p className="underline">
                      Branding, Identity & Typeface Design
                    </p>
                    <p className="mb-8">
                      We bring nearly a decade's worth of experience in
                      lettering, calligraphy, and typeface design. We offer
                      retail typeface licensing as well as custom branding and
                      typeface design to fit your unique identity.
                    </p>
                    <div className="grid" style={{ gap: "0.25rem" }}>
                      <div className="col-span-6">
                        <img src="/img/about-new/Type-SFPC-Fundraiser.gif" />
                      </div>
                      <div className="col-span-6">
                        <img src="/img/about-new/Type-Monochromic.png" />
                      </div>
                      <div
                        className="col-span-6"
                        style={{ backgroundColor: "#f5f5f5" }}
                      >
                        <img src="/img/about-new/Type-Mission-Heart.gif" />
                      </div>
                      <div className="col-span-6">
                        <img src="/img/about-new/Type-Felicette.png" />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-6 mt-16 lg:mt-0">
                    <p className="underline">Production and Publication</p>
                    <p className="mb-8">
                      We print and produce small-scale publications as well as
                      large-format murals, tapestries, and other physical goods.
                    </p>
                    <div className="flex flex-col items-start gap-1 md:gap-1">
                      <div className="flex flex-row items-start gap-1 md:gap-1">
                        <div className="col-span-6">
                          <img src="/img/about-new/production-scarves.png" />
                        </div>
                        <div className="col-span-6">
                          <img src="/img/about-new/production-kittypop.png" />
                        </div>
                      </div>
                      <div className="col-span-12">
                        <img src="/img/about-new/production-YANA.png" />
                      </div>
                      <div className="col-span-12">
                        <img src="/img/about-new/production-wtc.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <section className="mt-48 mb-24 lg:my-64 content-wide-mobile">
              <h1 className="text-3xl md:text-4xl lg:hidden">
                Studio Partners
              </h1>
              <div className="flex flex-col sm:flex-row gap-x-8 md:gap-x-16 lg:mb-24 content-right-pad">
                <div className="flex-1 max-w-2xl">
                  <img src="/img/about-new/kevin.png" />
                </div>
                <div className="flex-1 max-w-prose self-end mb-16">
                  <h1 className="text-5xl hidden lg:block">Studio Partners</h1>
                  <p>
                    Kevin Yeh (he/him) is a Burmese-American designer,
                    developer, and educator. He has led engineering teams and
                    initiatives at Kickstarter and Nava PBC. Kevin’s work
                    reflects broad interests to imagine, reconstruct, and relate
                    to forms of communication through generative design and
                    interactive experiences, using algorithmic form-making tools
                    to create playful and experimental websites, animated
                    sequences, and dynamic branding identities.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:flex-row justify-end gap-x-8 md:gap-x-16 content-left-pad">
                <div className="flex-1 max-w-prose self-end mb-12 text-end">
                  <p>
                    Lynne Yun (she/her) is a Korean-American typeface designer,
                    technologist, and educator. From crafting woven calligraphic
                    pieces to designing type for screens and publications,
                    Lynne's work spans an evolving set of multimedia to bring a
                    personal touch to everyday interactions. She is an alumna of
                    the Type@Cooper Extended program, School for Poetic
                    Computation, and ITP at NYU, and previously taught for
                    institutions such as Type@Cooper, Parsons School of Design,
                    and The Letterform Archive.
                  </p>
                </div>
                <div className="flex-1 max-w-2xl">
                  <img src="/img/about-new/lynne.png" />
                </div>
              </div>
            </section>

            <section className="ml-60 content-wide-mobile">
              <div className="max-w-3xl mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl">
                  Community and education are at the heart of our practice.
                </h1>
                <p>
                  We teach workshops, run classes, and offer donation-based
                  educational resources.
                </p>
                <p>
                  We are dedicated to inclusive education, accessible
                  technology, and open creative tools that empower all members
                  of our community. We welcome fresh eyes, diverse backgrounds,
                  and personal stories that reflect the many ways we interact
                  with language in physical and online spaces.
                </p>
                <p>
                  Interested in a workshop? Reach out to us at
                  hello@spacetypeco.com 👋
                </p>
              </div>

              <div
                className="flex flex-col lg:grid grid-cols-12 md:max-w-xl lg:max-w-6xl 3xl:max-w-7xl gap-8 lg:gap-2 justify-center"
                style={{ marginTop: "2em" }}
              >
                <Link href="https://typedesignschool.com">
                  <a className="tile tile-w-4 tile-h-4 grid-item">
                    <img src="/img/type_a-z.gif" />
                    <div className="mt-3 text-md">
                      Foundations of Type Design{" "}
                      <span style={{ fontWeight: 20 }}>→</span>
                    </div>
                    <p className="text-xs 3xl:text-sm mt-1">
                      Over 10 hours of content covering the history and
                      foundations of type design, how to get started on
                      designing a typeface, and how to plan out a series of
                      styles.
                    </p>
                  </a>
                </Link>

                <Link href="https://vartype.com">
                  <a className="tile tile-w-4 tile-h-4 grid-item rounded hidden">
                    <img src="/img/vartype.gif" />
                    <div className="small-link">
                      Vartype <span style={{ fontWeight: 20 }}>→</span>
                    </div>
                  </a>
                </Link>

                <Link href="https://letterformdesign.com">
                  <a className="tile tile-w-4 tile-h-4 grid-item">
                    <img src="/img/letterformdesign-1000w.png" />
                    <div className="mt-3 text-md">
                      Type Design & Lettering{" "}
                      <span style={{ fontWeight: 20 }}>→</span>
                    </div>
                    <p className="text-xs 3xl:text-sm mt-1">
                      Showcase of student work from our lettering and type
                      design courses.
                    </p>
                  </a>
                </Link>

                <Link href="https://generativetype.com">
                  <a className="tile tile-w-4 tile-h-4 grid-item">
                    <img src="/img/generativetype-1000w.png" />
                    <div className="mt-3 text-md">
                      Generative Typography{" "}
                      <span style={{ fontWeight: 20 }}>→</span>
                    </div>
                    <p className="text-xs 3xl:text-sm mt-1">
                      Showcase of student work from our generative typography
                      courses.
                    </p>
                  </a>
                </Link>
              </div>
            </section>

            <section className="mt-24 mb-36">
              <div style={{ maxWidth: "100rem" }}>
                <div className="flex flex-col md:flex-row items-start gap-12 md:gap-2 mt-12">
                  <div className="md:max-w-full">
                    <img src="/img/about-new/community-1.png" />
                    <div className="flex flex-col gap-1 mt-2 pr-1 items-end w-full">
                      <span className="text-xs 3xl:text-sm">
                        Generative Typography Workshop
                      </span>
                      <span className="text-xs 3xl:text-sm">
                        Letràstica, Guadalajara, Mexico
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2">
                    <div>
                      <img src="/img/about-new/community-2.png" />
                      <div className="flex flex-col gap-1 mt-2 pr-1 items-end w-full">
                        <span className="text-xs 3xl:text-sm">
                          Flourishing Workshop
                        </span>
                        <span className="text-xs 3xl:text-sm text-right">
                          Letterform Archive
                          <br className="md:hidden" />
                          <span className="hidden md:inline-block">,</span> San
                          Francisco
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src="/img/about-new/community-3.png" />
                      <div className="flex flex-col gap-1 mt-2 pr-1 items-end w-full">
                        <span className="text-xs 3xl:text-sm">
                          Pixel Type Workshop
                        </span>
                        <span className="text-xs 3xl:text-sm text-right">
                          Principles G.I. Coffee Shop
                          <br className="md:hidden" />
                          <span className="hidden md:inline-block">,</span>{" "}
                          Brooklyn
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-row justify-center my-24">
              <hr className="w-48 opacity-50" />
            </div>

            <div className="lg:flex justify-center">
              <section className="content-wide lg-content-uber-uber-wide">
                <h1 className="text-3xl">Teaching and Workshops</h1>
                <div className="md:grid grid-cols-12 gap-6 hidden md:block">
                  {[0, 1].map((tableNum) =>
                    Table(
                      TEACHING_AND_WORKSHOPS.slice(
                        tableNum * teachingSplitIndex,
                        (tableNum + 1) * teachingSplitIndex
                      )
                    )
                  )}
                </div>
                <div className="md:hidden">{Table(TEACHING_AND_WORKSHOPS)}</div>
                {/* TODO: remove manual margin .grid override */}
                <div
                  className="md:grid grid-cols-12 gap-6"
                  style={{ marginTop: "3rem" }}
                >
                  <div className="col-span-6 mb-12 md:mb-0">
                    <h1 className="text-3xl">Select Speaking Engagements</h1>
                    {Table(SPEAKING_ENGAGEMENTS)}
                  </div>{" "}
                  <div className="col-span-6">
                    <h1 className="text-3xl">Interviews and Press</h1>
                    {Table(INTERVIEWS_AND_PRESS)}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-start justify-start gap-y-2 md:gap-y-0 gap-x-2.5 my-12 max-w-5xl">
                  <div className="flex-1">
                    <img
                      src="/img/about-new/speaking.png"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <img
                      src="/img/about-new/exhibition.png"
                      className="object-contain flex-1"
                    />
                  </div>
                </div>
                <div className="max-w-lg">
                  <h1 className="text-3xl">Select Exhibitions</h1>
                  {Table(EXHIBITIONS)}
                </div>
                <div className="flex flex-row items-end justify-end min-w-full my-12">
                  <div className="flex flex-col md:flex-row items-end justify-end max-w-4xl gap-y-2 md:gap-y-0 gap-x-2.5">
                    <div style={{ flexGrow: 1 }}>
                      <img
                        src="/img/about-new/zine-table.png"
                        className="object-fill"
                      />
                    </div>
                    <div style={{ flexShrink: 1 }}>
                      <img
                        src="/img/about-new/zine-hester-st-fair.png"
                        className="object-fill"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row justify-end content-left-pad">
                  <div
                    className="max-w-lg"
                    style={{ minWidth: "calc(min(32rem, 100vw - 2rem))" }}
                  >
                    <h1 className="text-3xl">Publication Fairs</h1>
                    {Table(PUBLICATION_FAIRS)}
                  </div>
                </div>
              </section>
            </div>

            <div className="flex flex-col items-center mt-24">
              <img
                src="/img/about-new/email.png"
                className="object-contain h-48 mt-12 mb-6"
              />
              <h1 className="text-2xl">Have an idea? Send us a note.</h1>

              <a href="mailto:hello@spacetypeco.com">
                <h2 className="text-xl">hello@spacetypeco.com</h2>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

About.displayName = "About";
export default About;
