import express from "express";
import * as controller from "../controller/memberController.js";

const router = express.Router();

router.post("/login", controller.getLogin);

//? ↓ 전송잘되나 확인용 코드
// router.post("/", (req, res) => {
//   console.log(req.body);
// });

router.post("/idCheck", controller.getIdCheck);
router.post("/signup", controller.getSignup);

export default router;
