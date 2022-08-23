import "https://deno.land/x/dotenv@v3.2.0/load.ts";

import { opine, json, urlencoded } from "opine";

import router from "./routes/index.ts";

const app = opine();
const port = Deno.env.get("PORT") || "8000";

app.use(json());
app.use(urlencoded());

app.use("/api", router);

app.listen(`0.0.0.0:${port}`, () =>
  console.log(`>>> Listening on port ${port}`)
);
