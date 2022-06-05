import { useEffect, useState } from "react";

const loadScript = (url, target) => new Promise(resolve => {
  const tag = document.createElement('script');
  tag.async = false;
  tag.src = url;
  target.appendChild(tag);
  tag.addEventListener('load', resolve, {
    once: true
  });
});

const useScripts = (urls, checkLoaded, cb = () => {}, deps) => {
  useEffect(() => {
    const body = document.body;

    if (checkLoaded()) {
        cb();
    } else {
    Promise.all(urls.map(url => loadScript(url, body)))
      .then(cb);
    }
  }, deps);
}

export default useScripts;