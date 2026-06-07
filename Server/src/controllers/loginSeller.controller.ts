import type {Request , Response, NextFunction } from "express";
import { SellerServices } from "../services/loginSeller.service.js";


const loginSeller = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { email, password } = req.body;
        const result = await SellerServices.loginSeller({ email, password })
        res.status(200).json({
            success : true ,
            acesstoken : result
        });
        }
    catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to login user"
        });
    }}

export default loginSeller;