import React, { useState } from "react";

interface VideoProps {
  src: string;
  autoPlay: boolean;
  style: any;
}

export default function Video({ src, style, autoPlay = true }: VideoProps) {
  return (
    <video autoPlay={false} loop={true} style={style}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
