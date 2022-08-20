import React, { useState } from "react";

interface VideoProps {
  src: string;
  autoPlay: boolean;
}

export default function Video({ src, autoPlay = true }: VideoProps) {
  return (
    <video autoPlay={false} loop={true}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
