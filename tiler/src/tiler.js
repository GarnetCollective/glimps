import Jimp from "jimp";

const WIDTH = 1024;
const HEIGHT = 768;
// const WIDTH = 1600;
// const HEIGHT = 900;
const padding = 24;

const BORDER_COLORS = {
  white: 0xFFFFFFFF,
  black: 0x00000000,
}

const makeCoords = (topX, topY) => ({
  x: topX,
  y: topY
});

const calculateDims = () => {
  let availW = WIDTH - padding * 3;
  let availH = HEIGHT - padding * 3;

  let image_width = Math.floor(availW / 2);
  let image_height = Math.floor(availH / 2);

  return {
    image_width,
    image_height
  };
};

const saveCanvas = (canvas, path) => {
  return new Promise(resolve => {
    canvas.write(path, resolve);
  });
};

const makeImg = (w, h, bgColor = BORDER_COLORS.white) => {
  return new Promise((resolve, reject) => {
    new Jimp(w, h, bgColor, (err, image) => {
      if (err) {
        reject(err);
      }

      resolve(image);
    });
  });
};

const calculateCoords = (imgW, imgH, pad) => {
  let coords = [
    makeCoords(pad, pad),
    makeCoords(pad + imgW + pad, pad),
    makeCoords(pad, pad + imgH + pad),
    makeCoords(pad + imgW + pad, pad + imgH + pad)
  ];
  return coords;
};

export const createCollage = async (files, brand) => {
  const paths = [...files, brand];
  const dest = `fixtures/${Date.now()}_collage.jpg`;
  try {
    let { image_width, image_height } = calculateDims();
    let coords = calculateCoords(image_width, image_height, padding);

    let canvas = await makeImg(WIDTH, HEIGHT, BORDER_COLORS.black);

    for (var idx = 0; idx < paths.length; idx++) {
      let path = paths[idx];
      let im = await Jimp.read(path);
      im.cover(
        image_width,
        image_height,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
      );

      let { x, y } = coords[idx];
      canvas.composite(im, x, y);
    }

    await saveCanvas(canvas, dest);
    console.log("Wrote: ", dest);

  } catch (e) {
    console.log(e);
  }
};
