import express from "express";
import { connectionDB } from "./connection.js";
import { router } from "./user/routers.js";

const app = express();
const port = 3000;

connectionDB;
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log("connecting server done!");
});
