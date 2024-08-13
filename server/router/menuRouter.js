import express from "express";
import * as controller from "../controller/menuController.js";
// import * as opcontroller from "../controller/optionController.js";

const router = express.Router();

router.post("/icecream", controller.getIceCreamProducts);
router.post("/prepack", controller.getPrepackProducts);
router.post("/icecreamcake", controller.getIceCreamCakeProducts);
// router.get("/relatedproduct/:id/:type", opcontroller.getRelatedProduct);

router.get("/icecreamdetail/:id", controller.getIceCreamDetail);
router.get("/icecreamingredients/:id", controller.getIceCreamIngredients);
// router.get("/icecreamsizecheck/:id", controller.getIceCreamSizeCheck);
// router.get("/icecreamrelatedproduct/:id", controller.getIceCreamRelatedProduct);

router.get("/prepackdetail/:id", controller.getPrepackDetail);
router.get("/prepackingredients/:id", controller.getPrepackIngredients);
// router.get("/prepacksizecheck/:id", controller.getPrepackSizeCheck);
// router.get("/prepackrelatedproduct/:id", controller.getPrepackRelatedProduct);

router.get("/icecreamcakedetail/:id", controller.getIceCreamCakeDetail);
/* router.get(
  "/icecreamcakeingredients/:id",
  controller.getIceCreamCakeIngredients
); */
// router.get("/icecreamcakesizecheck/:id", controller.getIceCreamCakeSizeCheck);
// router.get(
//   "/icecreamcakerelatedproduct/:id",
//   controller.getIceCreamCakeRelatedProduct
// );

export default router;
