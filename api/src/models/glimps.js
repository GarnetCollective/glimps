import mongoose from "mongoose";
import uuid from "uuid";

const Schema = mongoose.Schema;

const glimpsSchema = new Schema({
  glimpsId: {
    type: String,
    binData: Buffer,
    index: true,
    unique: true,
    required: true,
    default: uuid.v4
  },
  eventId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true }
});

const Glimps = mongoose.model("Glimps", glimpsSchema);

export default Glimps;
