import mongoose from "mongoose";
import uuid from "uuid";

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    _id: {
      type: String,
      binData: Buffer,
      index: true,
      unique: true,
      required: true,
      default: uuid.v4
    },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    mainImageUrl: { type: String, required: true },
    mainColor: { type: String, default: "#6870FF" },
    logoUrl: { type: String, required: true },
    secretKey: { type: String, required: true },
    slug: { type: String }
  },
  { timestamps: true, autoIndex: false }
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
