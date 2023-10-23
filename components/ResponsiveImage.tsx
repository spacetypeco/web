import Image from "next/image";
import styles from "./ResponsiveImage.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  roundedBorder?: number | string;
  containerClassNames?: any;
  containerStyles?: any;
  cover?: boolean;
}

export default function ResponsiveImage(props: ImageProps) {
  let classNames = styles.image;
  if (props.className) {
    classNames += " " + props.className;
  }

  console.log(props.cover);

  return (
    <div
      className={`${styles.imageContainer} ${styles.rounded} ${
        props.containerClassNames
      } ${props.cover ? styles.cover : ""}`}
      style={{
        borderRadius:
          props.roundedBorder === undefined ? 10 : props.roundedBorder,
        ...(props.containerStyles || {}),
      }}
    >
      <Image
        className={classNames}
        alt={props.alt}
        src={props.src}
        layout="fill"
        // style={{
        //   borderRadius:
        //     props.roundedBorder === undefined ? 10 : props.roundedBorder,
        // }}
      />
    </div>
  );
}
