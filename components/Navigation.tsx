// import Image from "next/image";
import Link from "next/link";
import useHideOnScroll from "../hooks/useHideOnScroll";

export default function Navigation({ activeComponentName }) {
  let visible = useHideOnScroll();
  let classes = "flex-h nav full-w position-fixed";
  let style = {
    transition: "transform 0.6s",
    transform: visible ? "" : "translateY(-100%)",
  };

  return (
    <div className={classes} style={style}>
      <div className="logo overflow-y-hidden">
        <div className="logo-inner">
          <Link href="/">
            <img src="/img/logo_white.svg" />
          </Link>
        </div>
      </div>
      <div>
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
              <Link href="/about">About →</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
