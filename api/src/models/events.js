import mongoose from "mongoose";

const Schema = mongoose.Schema;

const eventSchema = new Schema({
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
