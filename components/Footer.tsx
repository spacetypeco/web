import { useEffect, useRef } from "react";

import Link from "next/link";
import NewsletterSignup from "../components/NewsletterSignup";

const Instagram = (
  <Link href="https://instagram.com/spacetypeco">Instagram</Link>
);
const HelloSpaceType = (
  <span>
    <Link href="mailto:hello@spacetypeco.com">hello@spacetypeco.com</Link>
  </span>
);

export default function Footer() {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1.0;
        }
      },
      {
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref.current]);

  return (
    <div className="footer" ref={ref}>
      <div
        className="flex-h flex-v-sm"
        style={{
          paddingTop: "1em",
          marginBottom: "2.5em",
          borderTop: "white 1px solid",
        }}
      >
        <div className="flex-item-3-5 flex-item-sm-1">
          <p style={{ maxWidth: "400px" }}>
            Stay in touch: new workshops, classes, typefaces, and updates to our
            online resources.
          </p>
          <NewsletterSignup />
        </div>
        <div className="flex-item-2-5 flex-item-sm-1">
          <h5>Space Type</h5>
          <p className="subtext">
            <ul className="list-basic">
              <li>{HelloSpaceType}</li>
              <li>{Instagram}</li>
            </ul>
          </p>
          <h5>Services</h5>
          <p className="subtext">
            <ul className="list-basic list-col-lg-2-sm-1">
              <li>Brand Strategy</li>
              <li>Identity Systems</li>
              <li>Web and Digital Design</li>
              <li>Software Development</li>
              <li>Custom Type Design</li>
              <li>Retail Typeface Licensing</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}
