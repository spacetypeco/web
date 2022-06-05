// import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navigation({ activeComponentName }) {
  const classes = "flex-h flex-end nav full-w position-fixed";

  const router = useRouter();

  console.log(router.pathname);

  const inWork = router.pathname.match(/\/work\/.+$/);

  return (
    <div className={classes}>
      <div className="logo overflow-y-hidden">
        <div className="logo-inner">
          <Link href="/">
            <img src="/img/logo_white.svg" />
          </Link>
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
      </div>
      <div className="controls">
        <div id="nav-area">
          <div id="nav-box" className="flex-v-xs">
            <div
              className={
                activeComponentName === "Work" ? "link active" : "link"
              }
            >
              <Link href="/work">Work</Link>
            </div>
            <div
              className={
                activeComponentName === "Type" ? "link active" : "link"
              }
            >
              <Link href="/typefaces">Typefaces</Link>
            </div>
            <div
              className={
                activeComponentName === "About" ? "link active" : "link"
              }
            >
              <Link href="/about">About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
