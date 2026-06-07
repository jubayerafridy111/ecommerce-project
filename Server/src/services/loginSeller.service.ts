import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import type { ILoginSeller } from "../interfaces/user.interface.js";
import Seller from "../models/seller.model.js";


const loginSeller = async (payload : ILoginSeller ) => {
    const user = await Seller.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatch = await (user as any).comparePassword(payload.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid password");
    }
    const accessToken = Jwt.sign(
        {
            userId: user._id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_ACCESS_SECRET as string,
        {
            expiresIn: "7d",
        }
    );
    return { accessToken };
}

export const SellerServices = {
   loginSeller 
}
