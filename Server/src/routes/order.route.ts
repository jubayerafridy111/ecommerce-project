import { Router } from "express";
import { OrderController } from "../controllers/addToOrder.controller.js";
import { UserAuth } from "../middleware/user.auth.js";

const router = Router();

router.post("/addOrder", UserAuth.auth, OrderController.createOrder);

export default router;