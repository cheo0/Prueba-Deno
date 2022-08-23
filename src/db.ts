import { join, dirname, fromFileUrl } from "path/mod.ts";
import { Low, JSONFile } from "lowdb";

import Data from "./models/Data.ts";

const file = join(dirname(fromFileUrl(import.meta.url)), "../data/db.json");
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter);

await db.read();

db.data ||= {
  tasks: [],
};

export default db;
