import express from "express";
import { connectionDB } from "./connection";
import { userRouter } from "./views/user/routers";

const app = express();
const port = 3000;

connectionDB;
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log("connecting server done!");
});
