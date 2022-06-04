// import Image from "next/image";
import Link from "next/link";

export default function Navigation({ activeComponentName }) {
  const classes = "flex-h flex-end nav full-w position-fixed";

  return (
    <div className={classes}>
      <div className="logo overflow-y-hidden">
        <div className="logo-inner">
          <a href="/">
            <img
              src="/img/logo_white.svg"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
        </div>
      </div>
      <div className="controls">
        <div id="nav-area">
          <div id="nav-box" className="flex-v-xs">
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
