import { Router } from "express";
import { UserAuth } from "../middleware/user.auth.js";
import createShop from "../controllers/createShop.controller.js";
import getMyShops from "../controllers/getMyShops.controller.js";
import { upload } from "../middleware/multer.js";
import createProduct from "../controllers/createProduct.controller.js";
import cloudinary from "../config/cloudinary.js";


const router = Router();

router.post("/createShop" , UserAuth.auth, createShop)
router.get("/myShops" , UserAuth.auth, getMyShops )
router.post("/createProduct" , UserAuth.auth, upload.array("images", 3), createProduct)


router.get(
  "/test",
  async (req, res) => {
    try {

      const result =
        await cloudinary.api.ping();

      res.json(result);

    } catch (error) {
      console.error(error);

      res.status(500).json(error);
    }
  }
);

export default router;