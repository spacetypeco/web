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
  autoPlay = true,
}: VideoProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <video
      autoPlay={false}
      loop={true}
      muted={true}
      playsInline={true}
      style={style}
      onLoadedData={() => setLoading(true)}
    >
      <source data-src={datasrc} src={src} type="video/mp4" />
    </video>
  );
}
