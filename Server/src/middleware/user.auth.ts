import type {Request,  Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const auth =  async (req : Request , res : Response , next : NextFunction) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            throw new Error("Unauthorized");
        }
        const accessToken = token.split(" ")[1];
        console.log(accessToken);
        const decoded = jwt.verify(accessToken as string, process.env.JWT_ACCESS_SECRET as string);
        (req as any).user = decoded;
        next();
    }
    catch (error) {
        res.status(401).json({
            success : false,
            message : "unauthorized",
        })
}}

export const UserAuth = {
    auth
}