import React, { useState } from "react";

interface VideoProps {
  src: string;
  autoPlay: boolean;
  style: any;
}

export default function Video({ src, style, autoPlay = true }: VideoProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <video
      autoPlay={false}
      loop={true}
      style={style}
      onLoadedData={() => setLoading(true)}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
