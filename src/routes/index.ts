import { Router } from "opine";

import db from "../db.ts";
import tasksRouter from "./tasks.routes.ts";

const router = new Router();

router.get("/", (_, res) => {
  const tasks = db.data?.tasks;

  return res.send(tasks);
});

router.use("/tasks", tasksRouter);

export default router;
