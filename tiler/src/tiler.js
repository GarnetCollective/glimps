import Jimp from "jimp";
import uuid from "uuid/v1";

const WIDTH = 1024;
const HEIGHT = 768;
// const WIDTH = 1600;
// const HEIGHT = 900;
const PADDING = 24;

const BORDER_COLORS = {
  white: 0xFFFFFFFF,
  black: 0x00000000,
}

const makeCoords = (topX, topY) => ({
  x: topX,
  y: topY
});

const calculateDims = () => {
  let availW = WIDTH - PADDING * 3;
  let availH = HEIGHT - PADDING * 3;

  let image_width = Math.floor(availW / 2);
  let image_height = Math.floor(availH / 2);

  return {
    image_width,
    image_height
  };
};

const getDestInfo = () => {
  const fileName = `c_${uuid()}.jpg`;
  return {
    file_name: fileName,
    file_path: `tmp/${fileName}`
  } 
}

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

const getResizedImage = async (path, new_width, new_height) => {
  let image = await Jimp.read(path);
  image.cover(
    new_width,
    new_height,
    Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE
  );
  return image;
}

export const createCollage = async (files, brand) => {
  const paths = [...files, brand];
  const dest = getDestInfo();
  try {
    let { image_width, image_height } = calculateDims();
    let coords = calculateCoords(image_width, image_height, PADDING);
    let canvas = await makeImg(WIDTH, HEIGHT, BORDER_COLORS.black);

    for (var idx = 0; idx < paths.length; idx++) {
      let path = paths[idx];
      let { x, y } = coords[idx];
      let resizedImg = getResizedImage(path);
      canvas.composite(resizedImg, x, y);
    }

    await saveCanvas(canvas, dest.file_path);
    return dest;

  } catch (e) {
    console.log(e);
    return null;
  }
};
