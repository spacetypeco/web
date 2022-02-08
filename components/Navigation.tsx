import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navigation({ active }) {
  return (
    <div className="flex-h flex-end nav full-w full-h">
      <div className="">
        <div className="logo">
          <Link href="/">
            <Image src="/img/logo_white.png" width="70px" height="70px" />
          </Link>
        </div>
      </div>
      <div className="controls">
        <div id="nav-area">
          <div id="nav-box" className="flex-v-xs">
            <a
              href="/type"
              className={active === "/type" ? "link active" : "link"}
            >
              Type Foundry
            </a>
            <a
              href="/teaching"
              className={active === "/teaching" ? "link active" : "link"}
            >
              Teaching
            </a>
            <a
              href="/about"
              className={active === "/about" ? "link active" : "link"}
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
