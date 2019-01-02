import mongoose from "mongoose";

const Schema = mongoose.Schema;

const glimpsSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, required: true },
  imageUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true }
});

const Glimps = mongoose.model("Glimps", glimpsSchema);

export default Glimps;
