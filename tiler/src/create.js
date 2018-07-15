import { img } from "base64-img";
import { unlink } from "fs";
import uuid from "uuid/v1";
import { resolve as path_resolve } from "path";
import { createCollage } from "./tiler";

const {
  AWS_ACCESS_KEY_ID: api_key,
  AWS_SECRET_ACCESS_KEY: api_secret
} = process.env;

const brand = "fixtures/brand.jpg";

const cleanUp = async images => {
  return Promise.all(images.map(rm));
};

const rm = path => {
  return new Promise((resolve, reject) => {
    unlink(path, err => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

const save = data => {
  return new Promise((resolve, reject) => {
    img(data, "tmp", uuid(), (err, location) => {
      err && reject(err);
      resolve(path_resolve(location));
    });
  });
};

const createStory = async storyImages => {
  let images = [];
  for (var shot of storyImages) {
    let loc = await save(shot.base64);
    images = images.concat([loc]);
  }
  console.log({ images });

  let collage = await createCollage(images, brand);
  console.log({ collage });
  console.log("\n");

  await cleanUp(images);

  return collage;
};

const create = async (req, res) => {
  console.log(Date.now());
  try {
    let body = req.body;
    let { story: storyImages } = body;
    let story = await createStory(storyImages);

    res.status(200).json({ success: true, collage: story.file_path });
  } catch (e) {
    console.log(e);
    res.status(400).json({ success: false, error: e });
  }
};

export default create;
