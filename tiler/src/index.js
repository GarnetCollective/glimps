import { createCollage } from "./tiler";
import path from "path";

const files = [
  "fixtures/input1.jpg",
  "fixtures/input2.jpg",
  "fixtures/input3.jpg"
];

const brand = "fixtures/brand.jpg";

createCollage(files, brand);