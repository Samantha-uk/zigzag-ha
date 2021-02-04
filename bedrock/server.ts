import { Drash } from "./deps.ts";
import ZigzagPanelResource from "./resources/resource-zigzag-panel.ts";

export const server = new Drash.Http.Server({
  static_paths: ["/zigzag"],
  directory: Deno.realPathSync("."),
  response_output: "text/html",
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "all",
  }),
  resources: [
    ZigzagPanelResource
  ],
});
