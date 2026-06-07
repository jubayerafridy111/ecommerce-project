import type {Request,Response,NextFunction} from "express";
import sellerCreateIntoDb from "../services/createSeller.service.js";


const createSeller = async ( req : Request , res : Response , next : NextFunction) => {
    try {
        const { name, email, password } = req.body;
        await sellerCreateIntoDb({ name, email, password });
        res.status(201).json({
            success : true
        }) ;
    }
    catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to create user"
        });
    }}

export default createSeller;