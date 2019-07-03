import express from "express";
import Router from "express";

const server = express();
const routes = Router();
routes.get("/", (req, res) => {
  return res.status(200).json({ hello: "world" });
});

server.use(routes);

server.listen(3333);
