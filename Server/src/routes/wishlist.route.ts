import Router from "express";
import { WishlistController } from "../controllers/addToWishlist.controller.js";
import { UserAuth } from "../middleware/user.auth.js";

const router = Router();

router.post("/addWishlist",UserAuth.auth,WishlistController.addWishlist);

export default router;