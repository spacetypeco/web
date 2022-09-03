import useResize from "./useResize";

export default function useImageSizer() {
  const sizeImage = (imageEl) => {
    const baseUrl = imageEl.getAttribute("data-src");
    const format = imageEl.getAttribute("data-fmt");

    if (!baseUrl || !format) {
      return;
    }

    const px = imageEl.clientWidth * window.devicePixelRatio;

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

    imageEl.src = `${baseUrl}${postfix}.${format}`;
  };

  return useResize(500, () => {
    const images = document.querySelectorAll("img");

    images.forEach(function (el) {
      sizeImage(el);
    });
  });
}
