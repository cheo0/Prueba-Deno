import { Router } from "opine";

import { createTask, getTasks } from "../controllers/tasks.controller.ts";

const tasksRouter = new Router();

tasksRouter.post("/create", createTask);
tasksRouter.get("/", getTasks);

export default tasksRouter;
