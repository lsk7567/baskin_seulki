import express from "express";
import * as controller from "../controller/cartsController.js";

const router = express.Router();
router.post("/", controller.getCarts);

router.post("/add", controller.insert); // 장바구니 추가
router.post("/count", controller.getCount); // 장바구니 count

export default router;
