import {Router} from "express";

import createUser from "../controllers/createUser.controller.js";
import { validateRequest } from "../middleware/user.validateRequest.js";
import { UserCreateValidationSchema } from "../validators/createUser.validation.js";
import { UserLoginValidationSchema } from "../validators/createUser.validation.js";
import authUser from "../controllers/auth.controller.js";
import  loginUser  from "../controllers/loginUser.controller.js"

const router = Router();

router.post("/register", validateRequest(UserCreateValidationSchema),createUser);
router.post("/login",validateRequest(UserLoginValidationSchema),loginUser);
router.get("/me" , authUser, (req, res) => {
res.send("success")
})




export default router;