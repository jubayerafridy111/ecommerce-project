import type {Request , Response, NextFunction} from "express";
import jwt from "jsonwebtoken";

const sellerAuth =  async (req : Request , res : Response , next : NextFunction) => {
    try {
        const authentication = req.headers.authorization;
        if (!authentication) {
            throw new Error("Unauthorized");
        }
        const accessToken = authentication.split(" ")[1];
        console.log(accessToken);
        const decoded = jwt.verify(accessToken as string, process.env.JWT_ACCESS_SECRET as string);
        (req as any).user = decoded;
        console.log(decoded);
        next();
    } catch (error) {
        res.status(401).json({
            success: false,
            message: "unauthorized",
        })
    }
}

export const SellerAuth = {
    sellerAuth
}