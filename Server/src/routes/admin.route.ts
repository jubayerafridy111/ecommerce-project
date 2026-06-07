import { Router } from "express";
import createAdmin from "../controllers/createAdmin.controller.js";
import adminLogin from "../controllers/loginAdmin.controller.js";
import adminAuth from "../middleware/admin.auth.js";



const router = Router();

router.post("/register", createAdmin )
router.post("/login", adminLogin)

