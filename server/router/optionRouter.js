import express from "express";

import * as controller from "../controller/optionController.js";

const router = express.Router();

router.post("/relatedproduct", controller.getRelatedProduct);

export default router;
