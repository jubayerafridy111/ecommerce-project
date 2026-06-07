import Router from "express";
import createSeller from "../controllers/createSeller.controller.js";
import loginSeller from "../controllers/loginSeller.controller.js";
import { SellerAuth } from "../middleware/seller.auth.js";
import createShop from "../controllers/createShop.controller.js";
import productUpload from "../controllers/productUpload.controller.js";


const router = Router();

router.post("/register", createSeller )
router.post("/login", loginSeller )
router.get("/dashboard",SellerAuth.sellerAuth, (req, res) => {
res.send("success to dashboard")
})
router.post("/shopregister" , SellerAuth.sellerAuth , createShop)
router.post("/productUpload", SellerAuth.sellerAuth, productUpload)

export default router;