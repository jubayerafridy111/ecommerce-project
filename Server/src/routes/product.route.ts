import Router from "express";
import { getProduct } from "../controllers/getProduct.controller.js";

const router = Router();

router.get("/", getProduct.getAllProducts)
router.get("/flashSale", getProduct.flashSaleProducts)
router.get("/:productId", getProduct.singleProduct)

export default router;