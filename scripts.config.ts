import type { DenonConfig } from "https://deno.land/x/denon@2.5.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "deno run ./src/main.ts",
      desc: "Init App",
      allow: ["net", "read", "env", "write"],
      importMap: "./import_map.json",
      unstable: true,
    },
  },
  watcher: {
    paths: ["./src"],
  },
};

export default config;
