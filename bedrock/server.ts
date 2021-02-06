import { Server } from "https://deno.land/x/wocket@v0.6.2/mod.ts";
import { Drash } from "./deps.ts";
import ZigzagPanelResource from "./resources/resource-zigzag-panel.ts";

// Create the server
const wsserver = new Server();

// Run the server
wsserver.run({
  hostname: "0.0.0.0",
  port: 1962,
});

console.log(
  `Bedrock WS started on ${wsserver.hostname}:${wsserver.port}`,
);


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
