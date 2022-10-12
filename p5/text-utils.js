// Utilities for working with text/fonts in p5.js.
//
// Include the latest version in your sketch via index.html:
// <script src="https://cdn.jsdelivr.net/gh/kyeah/p5@master/utils/text-utils.js"></script>
//
export const fontPts = ({
  font,
  text,
  x = 0,
  y = 0,
  fontSize,
  maxWidth,
  maxHeight,
  options,
}) => {
  const pts = font.textToPoints(text, x, y, fontSize, options);
  const bounds = font.textBounds(text, x, y, fontSize, options);

  let ratioWidth, ratioHeight;

  if (options.fill) {
    ratioWidth = maxWidth || width;
    ratioHeight = maxHeight || height;
  } else {
    const textRatio = bounds.w / bounds.h;

    const canvasWidth = maxWidth || width;
    const canvasHeight = maxHeight || height;
    const canvasRatio = canvasWidth / canvasHeight;

    if (textRatio > canvasRatio) {
      ratioWidth = canvasWidth;
      ratioHeight = canvasWidth / textRatio;
    } else {
      ratioHeight = canvasHeight;
      ratioWidth = textRatio * canvasHeight;
    }
  }

  return pts.map((pt) => {
    return {
      x: (-bounds.x * ratioWidth) / bounds.w + (pt.x * ratioWidth) / bounds.w,
      y: (-bounds.y * ratioHeight) / bounds.h + (pt.y * ratioHeight) / bounds.h,
    };
  });
};

export const textHeight = ({ text, maxWidth }) => {
  var words = text.split(" ");
  var line = "";
  var h = textLeading();

  for (var i = 0; i < words.length; i++) {
    var testLine = line + words[i] + " ";
    var testWidth = drawingContext.measureText(testLine).width;

    if (testWidth > maxWidth && i > 0) {
      line = words[i] + " ";
      h += textLeading();
    } else {
      line = testLine;
    }
  }

  return h;
};

// Break our text down into characters and calculate the indices
// that mark the next character.
//
// For instance, if the first character 'G' has 536 points, then the character
// boundary will be '536' and we'll end the 'G' shape there.
//
// Otherwise, every letter will be connected in one big ol' shape.
//
// Usage:
//   let points = font.textToPoints("word", x, y, 36)
//   let boundaries = getCharacterBoundaries({ font: font, text: "word", fontSize: 36 })
//
//   for (int i = 0; i < points.length; i++) {
//     if (boundaries.includes(i)) {
//       // New letter! do something.
//     }
//   }
//
// Returns:
//   An array of boundary indexes, one for each character. For example,
//   with three letters, the boundaries might be:
//
//   [536, 1001, 1210]
//   ( new letters after 536, 1001, and 1210 points )
//
export const getCharacterBoundaries = ({ font, text, fontSize, options }) => {
  return text.split("").reduce((arr, char) => {
    const prevBoundary = arr[arr.length - 1] || 0;

    // Convert the single character into points and count the length.
    const test = font.textToPoints(char, 0, 0, fontSize, options);
    // Offset the length by the previous character boundary.
    arr.push(prevBoundary + test.length);
    return arr;
  }, []);
};

export const normalizePointAngle = (point, { originX, originY } = {}) => {
  originX = originX || width / 2;
  originY = originY || height / 2;

  let originVector = createVector(originX - point.x, originY - point.y);
  let rotationVector = createVector(
    cos(radians(point.alpha)),
    sin(radians(point.alpha))
  );

  let alpha;
  if (abs(originVector.angleBetween(rotationVector)) > radians(90)) {
    alpha = (point.alpha + 180) % 360;
  } else {
    alpha = point.alpha % 360;
  }

  return alpha;
};

export const centeredTextToPoints = (font, txt, x, y, fontSize, options) => {
  let points = font.textToPoints(txt, 0, 0, fontSize, options);
  let bounds = font.textBounds(txt, x, y, fontSize);

  for (let pt of points) {
    pt.x = pt.x - bounds.x - bounds.w / 2;
    pt.y = pt.y - bounds.y - bounds.h / 2;

    if (options.normalizeAngle) {
      pt.alpha = normalizePointAngle(pt);
    }
  }

  return points;
};

// Requires opentype.js and variableFont.js
// Returns the font and varfont objects, if it succeeds.
export const loadVariableFontMetadata = (file) => {
  let reader = new FileReader();

  return new Promise((resolve, reject) => {
    reader.onload = function () {
      try {
        let font = opentype.parse(this.result);
        let varFont = new VariableFont(font);
        resolve([font, varFont]);
      } catch (e) {
        reject(e);
      }
    };

    reader.onerror = reject;
    reader.onabort = reject;
    reader.readAsArrayBuffer(file);
  });
};

// Returns the font-face filename
export const loadFontInCSS = (file) => {
  const filename = file.name.replace(/[^A-Za-z\-\_\ ]/g, "");

  let newStyle = document.createElement("style");
  let textChild = document.createTextNode(
    "\
      @font-face {\
          font-family: " +
      filename +
      ";\
          src: url('" +
      file.data +
      "');\
      }\
    "
  );

  newStyle.appendChild(textChild);
  document.head.appendChild(newStyle);
  return filename;
};
