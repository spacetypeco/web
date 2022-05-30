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
  return (
    <div className="footer">
      <div className="flex-h flex-v-sm" style={{ marginTop: "2rem " }}>
        <div className="flex-item-3-5 flex-item-sm-1">
          <h5>Stay in touch:</h5>
          <NewsletterSignup />
          <h5>Contact</h5>
          <p className="subtext">
            <ul className="list-basic">
              <li>{HelloSpaceType}</li>
              <li>{Instagram}</li>
            </ul>
          </p>
        </div>
        <div className="flex-item-2-5 flex-item-sm-1">
          <h5>Services</h5>
          <p className="subtext">
            <ul className="list-basic">
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
