import mongoose from "mongoose";
import uuid from "uuid";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
  eventId: {
    type: String,
    binData: Buffer,
    index: true,
    unique: true,
    required: true,
    default: uuid.v4
  },
  name: { type: String, required: true },
  date: { type: Date, required: true },
  mainImageUrl: { type: String },
  mainColor: { type: String },
  logoUrl: { type: String },
  secretKey: { type: String },
  slug: { type: String }
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
