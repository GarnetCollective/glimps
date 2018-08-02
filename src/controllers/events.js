import { createEvent } from "../services/event";

const index = (req, res) => {
  res.status(200).send({ success: true, msg: "events" });
};

const show = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `event ${id}` });
};

const create = async (req, res) => {
  try {
    // const { name } = req.body;
    const name = "Speak";
    const event = await createEvent(name);
    res.send({ success: true, msg: "Event Created", event: event });
  } catch (e) {
    res.send({ success: false, msg: e.message });
  }
};

export default {
  index,
  show,
  create
};
