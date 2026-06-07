import type {Request, Response, NextFunction} from "express";
import adminCreateIntoDb from "../services/createAdmin.service.js";



const createAdmin = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const { name, email, password } = req.body;
        await adminCreateIntoDb({ name, email, password });
        res.status(201).json({
            success : true
        }) ;
    } catch (error) {
        res.status(500).json({
            success : false ,
            message : "failed to create admin"
        });
    }}

export default createAdmin;
        