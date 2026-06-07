import type {Request , Response, NextFunction} from "express";
import shopCreateIntoDb from "../services/createShop.service.js";



const createShop = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { name, title, description } = req.body;
        const sellerId = (req as any).user.userId;
        console.log(sellerId);
        await shopCreateIntoDb({ name, title, description, sellerId });
        res.status(201).json({
            success : true
        }) ;
    }
    catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to create shop"
        });
    }
    }

export default createShop;