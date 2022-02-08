import Link from "next/link";

export default function FontRow({ label, classes }) {
  const fontCSSClass = label.toLowerCase().replace(" ", "-");
  const classNames = `typetester ${fontCSSClass}`;

  return (
    <div className={`flex-h-md flex-v-sm typetester-container ${classes}`}>
      <div className="flex-v typetester-info-container">
        <span className="typetester-label">{label}</span>
        <Link href="https://google.com">Buy</Link>
      </div>
      <span contentEditable className={classNames} spellCheck={false}>
        {label}
      </span>
    </div>
  );
}
