import Link from "next/link";
import useHover from "../hooks/useHover.jsx";

export default function ProjectHoverLink({ href, title, ...props }) {
  const [hovered, eventHandlers] = useHover();
  const show = hovered ? "flex" : "none";

  return (
    <Link href={href}>
      <a
        className="full-w full-h position-rel"
        style={{
          display: "inline-block",
        }}
        {...eventHandlers}
      >
        <div
          className="full-w full-h position-abs project-hover-overlay"
          style={{
            display: show,
          }}
        >
          <span className="project-title">{title}</span>
        </div>

        {props.children}
      </a>
    </Link>
  );
}
