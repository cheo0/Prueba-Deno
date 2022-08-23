import { OpineRequest, OpineResponse } from "opine";
import { required, validate } from "validasaur";

import db from "../db.ts";

export async function createTask(req: OpineRequest, res: OpineResponse) {
  const { body } = req;

  const [passes, errors] = await validate(body, {
    title: required,
    description: required,
    author: required,
  });

  if (!passes) {
    return res.setStatus(400).send(errors);
  }

  db.data?.tasks.push({
    id: crypto.randomUUID(),
    completed: false,
    ...body,
  });

  await db.write();

  return res.send(body);
}

export function getTasks(_: OpineRequest, res: OpineResponse) {
  return res.send(db.data?.tasks);
}
