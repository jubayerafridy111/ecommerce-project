import type {Request , Response, NextFunction} from "express";
import  Jwt  from "jsonwebtoken";

const adminAuth = async (req : Request , res : Response , next : NextFunction) => {
    try {
        const authentication = req.headers.authorization;
        if (!authentication) {
            throw new Error("Unauthorized");
        }
        const accessToken = authentication.split(" ")[1];
        console.log(accessToken);
        const decoded = Jwt.verify(accessToken as string, process.env.JWT_ACCESS_SECRET as string);
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

export default  adminAuth;
