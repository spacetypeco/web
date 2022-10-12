import React, { useCallback, useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";

interface VideoProps {
  datasrc?: string;
  src?: string;
  style: any;
  poster?: string;
}

const sizedSrc = (dataSrc, width) => {
  if (dataSrc && width) {
    const px = width * window.devicePixelRatio;

    let postfix = "";
    if (px >= 1500) {
      postfix = "-2000w";
    } else if (px >= 1000) {
      postfix = "-1500w";
    } else if (px >= 500) {
      postfix = "-1000w";
    } else {
      postfix = "-500w";
    }

    return `${dataSrc}${postfix}.m4v`;
  }

  return null;
};

/**
 * The Video component manages state for an individual video. It's designed for two main things:
 * - Sizing videos properly for the container based on data-src
 * - Playing and pausing videos based on visibility on the screen
 */
export default function Video({ datasrc, src, style, poster }: VideoProps) {
  const ref = useRef<HTMLVideoElement>();

  // Listen for size changes
  const [dimensions, setDimensions] = useState({
    width: null,
    pixelRatio: null,
  });

  useEffect(() => {
    const node = ref.current;
    // only use new width if it's larger. never try to load a new video if we're downsizing.
    const newWidth = node?.getBoundingClientRect().width;
    if (!dimensions.width || dimensions.width < newWidth) {
      setDimensions({ width: newWidth, pixelRatio: window.devicePixelRatio });
    }
  }, [ref.current]);

  // Listen for inView changes
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });

  const allRefs = useCallback(
    (node) => {
      // Ref's from useRef needs to have the node assigned to `current`
      ref.current = node;
      // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    const node = ref.current;

    if (inView) {
      node?.play();
    } else {
      node?.pause();
    }
  }, [inView]);

  let displaySrc = src || sizedSrc(datasrc, dimensions.width);

  const displayPoster =
    poster ||
    (datasrc
      ? `${datasrc}-poster.png`
      : `${src.replace(/\..*/, "-poster.png")}`);

  return (
    <video
      autoPlay={false}
      preload="metadata"
      loop={true}
      muted={true}
      playsInline={true}
      style={style}
      ref={allRefs}
      key={displaySrc || datasrc || src}
      poster={displayPoster}
    >
      <source data-src={datasrc} src={displaySrc} type="video/mp4" />
    </video>
  );
}
