import Link from "next/link";
import useHover from "../hooks/useHover.jsx";

export default function ProjectHoverLink({ href, title, ...props }) {
  const [hovered, eventHandlers] = useHover();
  const visibility = hovered ? 1.0 : 0.0;

  const fullLink = `${href}?fromWork=true`;

  return (
    <Link href={fullLink} as={href}>
      <a
        className="full-w full-h position-rel"
        style={{
          display: "inline-block",
        }}
        {...eventHandlers}
      >
        <div className="position-abs flex-h flex-centered full-h full-w">
          <div
            className="project-hover-overlay"
            style={{
              opacity: visibility,
            }}
          >
            <h3 className="project-title">{title}</h3>
          </div>
        </div>

        {props.children}
      </a>
    </Link>
  );
}
