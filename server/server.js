import express from "express";
import cors from "cors";
import path from "path";
import menuRouter from "./router/menuRouter.js";
import opRouter from "./router/optionRouter.js";
import memberRouter from "./router/memberRouter.js";
import CSCenterRouter from "./router/CSCenterRouter.js";
import BrPlayRouter from "./router/BrPlayRouter.js";
import StoreDeliveryRouter from "./router/StoreDeliveryRouter.js";
import MainRouter from "./router/MainRouter.js";
import cartsRouter from "./router/cartsRouter.js";

const server = express();
const port = 8080;

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());
server.use("/upload", express.static(path.join("uploads")));
server.use("/menu", menuRouter);
server.use("/option", opRouter);
server.use("/member", memberRouter);
server.use("/", MainRouter);
server.use("/cscenter", CSCenterRouter);
server.use("/play", BrPlayRouter);
server.use("/store", StoreDeliveryRouter);
server.use("/carts", cartsRouter);

server.listen(port, () => {
  console.log(`server start ==> ${port}`);
});
