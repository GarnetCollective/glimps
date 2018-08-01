import { Event } from "../models";

const index = (req, res) => {
  res.status(200).send({ success: true, msg: "events" });
};

const show = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `event ${id}` });
};

const create = async (req, res) => {
  try {
    await Event.create({
      id: "feb4ff69-58b2-482d-bcb2-b87a40460599",
      Name: "Spoke"
    });
    res.send({ success: true, msg: "Created" });
  } catch (e) {
    res.send({ success: false, msg: e.message });
  }
};

export default {
  index,
  show,
  create
};
