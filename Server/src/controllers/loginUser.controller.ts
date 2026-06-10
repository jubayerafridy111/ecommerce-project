import type {Request , Response, NextFunction } from "express";
import { UserServices } from "../services/loginUser.service.js";


const loginUser = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { email, password, role} = req.body;
        const result = await UserServices.loginUser({ email, password , role})
        res.status(200).json({
            success : true ,
            data : result
        });
        }
    catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to login user"
        });
    }}

export default loginUser;