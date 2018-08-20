import { Router } from "express";

import text from "../controllers/text";

import mail from "../controllers/mail";

const apiRouter = Router();

apiRouter.post("/text", text.create);

apiRouter.post("/mail", mail.create);

export default apiRouter;
