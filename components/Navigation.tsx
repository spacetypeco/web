import { Rotate as Hamburger } from "hamburger-react";
// import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../public/img/logo_white.svg";
import useHideOnScroll from "../hooks/useHideOnScroll";
import { useState } from "react";

export default function Navigation({ activeComponentName }) {
  // const classes = "flex-h flex-between nav full-w position-fixed";
  let visible = useHideOnScroll();

  const [isOpen, setOpen] = useState(false);

  let mobileStyle = {
    position: "fixed",
    transition: "transform 0.6s",
    transform: isOpen ? "" : "translateX(100%)",
  };

  let desktopStyle = {
    position: "fixed",
    transition: "transform 0.6s",
    transform: visible ? "" : "translateY(-100%)",
  };

  const NavVersion = (classNames, style) => {
    let classes = "flex-h nav full-w flex-v-xs position-fixed " + classNames;

    return (
      <div className={classes} style={style}>
        <div className="logo overflow-y-hidden">
          <Link href="/">
            <div className="logo-inner">
              <a onClick={() => setOpen(false)}>
                <LogoWhite />
              </a>
            </div>
          </Link>
        </div>
        <div>
          <div id="nav-area">
            <div id="nav-box" className="flex-v-xs flex-centered">
              <div
                className={
                  activeComponentName === "Work" ? "link active" : "link"
                }
              >
                <Link href="/work">
                  <a onClick={() => setOpen(false)}>Work</a>
                </Link>
              </div>
              {/* <div
                className={
                  activeComponentName === "Type" ? "link active" : "link"
                }
              >
                <Link href="/typefaces">
                  <a onClick={() => setOpen(false)}>Typefaces</a>
                </Link>
              </div> */}
              <div
                className={
                  activeComponentName === "Publications"
                    ? "link active"
                    : "link"
                }
              >
                <Link href="/publications">
                  <a onClick={() => setOpen(false)}>Publications</a>
                </Link>
              </div>
              <div className="link">
                <Link href="https://shop.spacetypeco.com">
                  <a>Shop</a>
                </Link>
              </div>
              <div
                className={
                  activeComponentName === "About" ? "link active" : "link"
                }
              >
                <Link href="/about">
                  <a onClick={() => setOpen(false)}>About →</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="show-sm flex-h flex-end-j w-full fixed p-8"
        style={{
          zIndex: 3,
        }}
      >
        <Hamburger
          color={isOpen ? "var(--color-black)" : "var(--color-white)"}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {NavVersion("show-sm", mobileStyle)}
      {NavVersion("hide-sm", desktopStyle)}
    </>
  );
}
