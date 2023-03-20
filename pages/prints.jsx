import Head from "next/head";
import ResponsiveImage from "../components/ResponsiveImage";
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

  return (
    <>
      <Head>
        <title>Space Type - Prints</title>
        <meta property="og:title" content="Space Type - Prints" />
      </Head>
      <main>
        <div id="container" className="full-w full-h position-rel">
          <div id="about">
            <div
              className="full-vw full-vh"
              style={{ position: "fixed" }}
              id="bg"
            >
              <ReactP5Wrapper sketch={sketch} />
            </div>
            <section
              className="fade-in content width-1200"
              data-theme="theme-light"
            >
              {GothicTitle("Zines & Prints")}

              <div className="project-grid project-grid--unsized">
                <div className="tile-w-6 tile-h-6">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/in-situ/DSC00807.jpg"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-6">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/in-situ/DSC00814.jpg"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-4">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/queer magic.png"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-5">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/queer-magic-duo.JPG"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-3">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/A-Z Calligraphy.png"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-3">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/DuoTone.png"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-4">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/A-Z Animals.png"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-6">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/Pixel Workshop Flyer.png"
                    layout="fill"
                  />
                </div>
                <div className="tile-w-6 tile-h-3">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/Pixel A-Z.png"
                    layout="fill"
                  />
                </div>
                <div
                  className="tile-w-12 tile-h-6"
                  style={{ marginTop: "4em" }}
                >
                  <div className="d-flex flex-centered">
                    <ResponsiveImage
                      alt="test"
                      src="/works/riso/Laika.png"
                      layout="fill"
                      containerStyles={{ width: "50%" }}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="tile-w-6 tile-h-6">
                  <ResponsiveImage
                    alt="test"
                    src="/works/riso/QueerMagicDuotone.png"
                    layout="fill"
                  />
                </div> */}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

Prints.displayName = "Prints";
export default Prints;
