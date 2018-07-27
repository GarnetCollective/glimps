import { Router } from "express";

const glimpsRouter = Router();

glimpsRouter.get("/", (req, res) => {
  res.status(200).send({ success: true, msg: "glimps" });
});

glimpsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).send({ success: true, msg: `glimps ${id}` });
});

export default glimpsRouter;
