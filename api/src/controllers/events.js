const index = (req, res) => {
  res.status(200).send({ success: true, msg: "events" });
};

const show = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `event ${id}` });
};

export default {
  index,
  show
};
