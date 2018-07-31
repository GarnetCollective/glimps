const index = (req, res) => {
  res.status(200).send({ success: true, msg: "glimps" });
};

const show = (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `glimps ${id}` });
};

export default {
  index,
  show
};
