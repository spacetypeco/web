import React, { useState } from "react";

interface VideoProps {
  datasrc?: string;
  src?: string;
  autoPlay: boolean;
  style: any;
}

export default function Video({
  datasrc,
  src,
  style,
  autoPlay = false,
}: VideoProps) {
  const [isLoading, setLoading] = useState(true);

  // TODO: Replace debug color with loader
  const backgroundColor = isLoading ? "red" : "none";

  return (
    <video
      autoPlay={autoPlay}
      preload="none"
      loop={true}
      muted={true}
      playsInline={true}
      style={{ backgroundColor, ...style }}
      onLoadedData={() => {
        console.log("loaded video: " + datasrc + src);
        setLoading(false);
      }}
    >
      <source data-src={datasrc} src={src} type="video/mp4" />
    </video>
  );
}
