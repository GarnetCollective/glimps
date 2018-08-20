import { Router } from "express";

import text from "../controllers/text";

const apiRouter = Router();

apiRouter.post("/text", text.create);

export default apiRouter;
