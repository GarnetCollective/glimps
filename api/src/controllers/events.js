import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get("/", (req, res) => {
  res.status(200).send({ success: true, msg: "events" });
});

eventsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `event ${id}` });
});

export default eventsRouter;
