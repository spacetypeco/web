// import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activeComponentName }) {
  const classes = "flex-h flex-between nav full-w position-fixed";

  return (
    <div className={classes}>
      <div className="logo overflow-y-hidden">
        <div className="logo-inner">
          <Link href="/">
            <img src="/img/logo_white.svg" />
          </Link>
        </div>
      </div>
      <div className="controls flex-centered-h-v-sm">
        <div id="nav-area">
          <div id="nav-box" className="flex-h">
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
