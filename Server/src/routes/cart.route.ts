import { Router } from "express";
import { CartController } from "../controllers/addToCart.controller.js";
import { UserAuth } from "../middleware/user.auth.js";

const router = Router();

router.post("/addCart", UserAuth.auth, CartController.addCart);
router.get("/getCart", UserAuth.auth, CartController.getCart);


export default router;