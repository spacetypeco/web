// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({ active, positionAbsolute = false }) {
  const classes = `flex-h flex-end nav full-w ${
    positionAbsolute ? "position-abs-lg" : ""
  }`;

  const router = useRouter();

  console.log(router.pathname);

  const inWork = router.pathname.match(/\/work\/.+$/);

  return (
    <div className={classes} style={{ zIndex: 1 }}>
      <div className="logo">
        <a href="/">
          <img
            src="/img/logo_white.svg"
            style={{ width: "70px", height: "70px" }}
          />
        </a>
        {inWork && (
          <a
            className="nav-back"
            onClick={() => {
              router.query.fromWork ? router.back() : router.push("/work");
            }}
          >
            ← work
          </a>
        )}
      </div>
      <div id="nav-area">
        <div id="nav-box" className="flex-v-xs">
          <div className={active === "/work" ? "link active" : "link"}>
            <Link href="/work">Work</Link>
          </div>
          <div className={active === "/typefaces" ? "link active" : "link"}>
            <Link href="/typefaces">Typefaces</Link>
          </div>
          <div className={active === "/teaching" ? "link active" : "link"}>
            <Link href="/teaching">Teaching</Link>
          </div>
          <div className={active === "/about" ? "link active" : "link"}>
            <Link href="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
