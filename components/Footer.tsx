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
      <h4>Stay in touch:</h4>
      <NewsletterSignup />
      <div className="flex-h flex-v-sm" style={{ marginTop: "2rem " }}>
        <div className="flex-item-1-2 flex-item-sm-1">
          <h4>Contact</h4>
          <p className="subtext">
            <ul className="list-basic">
              <li>{HelloSpaceType}</li>
              <li>{Instagram}</li>
            </ul>
          </p>
        </div>
        <div className="flex-item-1-2 flex-item-sm-1">
          <h4>Services</h4>
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
