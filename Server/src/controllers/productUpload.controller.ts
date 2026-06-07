import type { Request , Response , NextFunction } from "express";
import productCreateIntoDb from "../services/createProduct.service.js";



const productUpload = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { name, price, title, description, category, shopId } = req.body;
        const sellerId = (req as any).user.userId;
        await productCreateIntoDb({ name, price, title, description, category, sellerId, shopId });
        res.status(201).json({
            success : true
        }) ;
    }
    catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to create product"
        });
    }
    }

export default productUpload;
