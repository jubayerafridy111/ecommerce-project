import type {Request,Response,NextFunction} from "express";
import getAllProductsFromDb from "../services/getProducts.service.js";
import getSingleProductFromDb from "../services/getSingleProduct.service.js";
import getFlashSaleProducts from "../services/getFlashSaleProducts.service.js";





const getAllProducts = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const result = await getAllProductsFromDb(req.query);
        res.status(200).json({
            success : true ,
            data : result
        });
    } catch (error){
        next(error);
    }
    }

const singleProduct = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { productId } = req.params;
        const result = await getSingleProductFromDb(productId as string);
        res.status(200).json({
            success : true ,
            data : result
        });
    } catch (error){
        next(error);
    }
    }

const flashSaleProducts = async (req : Request , res : Response , next : NextFunction) => {
    const result = await getFlashSaleProducts();

    res.status(200).json({
        success : true ,
        data : result
    });
    }
    


export const getProduct = {
    getAllProducts,
    singleProduct,
    flashSaleProducts

}