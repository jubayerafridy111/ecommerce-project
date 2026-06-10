import type {Request,Response,NextFunction} from "express";
import userCreateIntoDb from "../services/createUser.service.js";


const createUser = async ( req : Request , res : Response , next : NextFunction) => {
    try {
        const { name, email, password, role } = req.body;
        await userCreateIntoDb({ name, email, password, role});
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

export default createUser;