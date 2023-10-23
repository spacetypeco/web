import Head from "next/head";
import ResponsiveImage from "../components/ResponsiveImage";
import Video from "../components/Video";
import createSketch from "../p5/sketches/blobsBG";
import dynamic from "next/dynamic";
import useLogo from "../hooks/useLogo";

const ReactP5Wrapper = dynamic(
  () => import("react-p5-wrapper").then((mod) => mod.ReactP5Wrapper),
  {
    ssr: false,
  }
);

const GothicTitle = (txt) => {
  return (
    <div style={{ display: "grid", marginBottom: "2em" }}>
      <p
        className="h1 label-accent note wipe-down no-delay gothic-base title"
        style={{ gridArea: "1 / 1", color: "var(--color-black)" }}
      >
        {txt}
      </p>
      <p
        className="h1 label-accent note wipe-down no-delay gothic-layer-1 title"
        style={{
          gridArea: "1 / 1",
          color: "var(--color-title)",
          animationDelay: "0.4s",
        }}
      >
        {txt}
      </p>
      <p
        className="h1 label-accent note wipe-down no-delay gothic-layer-2 title"
        style={{ gridArea: "1 / 1", color: "var(--color-white" }}
      >
        {txt}
      </p>
    </div>
  );
};

function Prints() {
  useLogo();
  const sketch = createSketch("bg");

  const PRINTS = [
    "/works/riso/in-situ/DSC00807.jpg",
    "/works/riso/in-situ/DSC00814.jpg",
    "/works/riso/scans/prints/queer magic.png",
    "/works/riso/queer-magic-duo.JPG",
    "/works/riso/scans/prints/A-Z Calligraphy.png",
    "/works/riso/scans/prints/computational/DuoTone.png",
    "/works/riso/scans/animals-a-z-zine.png",
    "/works/riso/scans/prints/Pixel A-Z.png",
  ];

  const LONG_PRINTS = [
    "/works/riso/scans/prints/computational/Laika.png",
    "/works/riso/scans/prints/computational/breathe-1.png",
    "/works/riso/scans/prints/computational/breathe-3.jpg",
    "/works/riso/scans/prints/animals-a-z.png",
    "/works/riso/scans/prints/computational/sleepless.png",
  ];

  const CAT = [
    "/works/riso/scans/kittypop/Cat_1024x1024.webp",
    "/works/riso/scans/kittypop/Cat_2_1024x1024.jpg",
    "/works/riso/scans/kittypop/Cat_3_1024x1024.jpg",
    "/works/riso/scans/kittypop/Cat_4_1024x1024.webp",
    "/works/riso/scans/kittypop/Cat_5_1024x1024.jpg",
    "/works/riso/scans/kittypop/Cat_6_1024x1024.jpg",
  ];

  const TIGER = [
    "/works/riso/scans/tigers/1.jpg",
    "/works/riso/scans/tigers/2.jpg",
    "/works/riso/scans/tigers/3.jpg",
    "/works/riso/scans/tigers/4.jpg",
    "/works/riso/scans/tigers/5.jpg",
  ];

  return (
    <>
      <Head>
        <title>Space Type - Prints</title>
        <meta property="og:title" content="Space Type - Prints" />
      </Head>
      <main>
        <div id="container" className="full-w full-h position-rel mb-12">
          <div id="about">
            <div
              className="full-vw full-vh"
              style={{ position: "fixed" }}
              id="bg"
            >
              <ReactP5Wrapper sketch={sketch} />
            </div>
            <section
              className="fade-in content-wide content-top"
              data-theme="theme-light"
            >
              {GothicTitle("Printing Press")}

              <div
                className="grid"
                style={{
                  marginBlock: "2em",
                  padding: "1em",
                  gap: "0.5em",
                  border: "10px solid pink",
                  borderRadius: "10px",
                  background: "var(--color-black)",
                }}
              >
                {CAT.map((print) => {
                  return (
                    <div className="col-span-6 lg:col-span-4">
                      <ResponsiveImage alt="test" src={print} cover={true} />
                    </div>
                  );
                })}
              </div>

              <div
                className="grid"
                style={{ marginBlock: "2em", gap: "0.5em" }}
              >
                <div className="col-span-4">
                  <Video src="/works/riso/kittypop.MOV" />
                </div>
                <div className="col-span-4">
                  <Video src="/works/riso/folklore.MOV" />
                </div>
                <div className="col-span-4">
                  <Video src="/works/riso/folklore-process.MOV" />
                </div>
              </div>

              <div
                className="grid"
                style={{
                  marginBlock: "2em",
                  padding: "1em",
                  gap: "0.5em",
                  border: "10px solid #BCF2E7",
                  borderRadius: "10px",
                  background: "var(--color-black)",
                }}
              >
                {TIGER.map((print) => {
                  return (
                    <div className="col-span-6 lg:col-span-4">
                      <ResponsiveImage alt="test" src={print} cover={true} />
                    </div>
                  );
                })}
              </div>

              <div
                className="grid"
                style={{ marginBlock: "2em", gap: "0.5em" }}
              >
                {PRINTS.map((print) => {
                  return (
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                      <ResponsiveImage alt="test" src={print} cover={true} />
                    </div>
                  );
                })}
              </div>

              <div
                className="grid"
                style={{ marginBlock: "2em", gap: "0.5em" }}
              >
                <div className="col-span-4">
                  <ResponsiveImage
                    src="/works/riso/scarves.JPG"
                    alt="test"
                    cover={true}
                  />
                </div>
                <div className="col-span-4">
                  <Video src="/works/riso/kitty-bday.MOV" />
                </div>
                <div className="col-span-4">
                  <ResponsiveImage
                    src="/works/riso/folklore-kevin.JPG"
                    alt="test"
                    cover={true}
                  />
                </div>
              </div>

              <div
                className="grid"
                style={{ marginBlock: "2em", gap: "0.5em" }}
              >
                {LONG_PRINTS.map((print) => {
                  return (
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                      <ResponsiveImage alt="test" src={print} cover={true} />
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

Prints.displayName = "Prints";
export default Prints;
