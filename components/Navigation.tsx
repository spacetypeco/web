// import Image from "next/image";
import Link from "next/link";

export default function Navigation({ active }) {
  return (
    <div className="flex-h flex-end nav full-w full-h">
      <div className="">
        <div className="logo">
          <a href="/">
            <img
              src="/img/logo_white.png"
              style={{ width: "70px", height: "70px" }}
            />
          </a>
        </div>
      </div>
      <div className="controls">
        <div id="nav-area">
          <div id="nav-box" className="flex-v-xs">
            <div className={active === "/type" ? "link active" : "link"}>
              <Link href="/type">Type Foundry</Link>
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
    </div>
  );
}
