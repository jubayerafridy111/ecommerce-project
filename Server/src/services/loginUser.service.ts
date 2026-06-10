import type { ILogin } from "../interfaces/user.interface.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import Cart from "../models/cart.model.js";
import Wishlist from "../models/wishlist.model.js";


const loginUser = async (payload : ILogin ) => {
    const user = await User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new Error("User not found");
    }

    if ( user.role !== payload.role ) {
    throw new Error(
      "Invalid role selected"
    );
  }
    const isPasswordMatch = await (user as any).comparePassword(payload.password);
    if (!isPasswordMatch) {
        throw new Error("Invalid password");
    }
    const accessToken = jwt.sign(
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
    const userName = user.name;
    const role = user.role;

    const cart = await Cart.findOne({userId: user._id });
    const wishlist = await Wishlist.findOne({ userId: user._id });

    const cartProductIds = cart?.products.map( (item) => item.productId.toString()) || [];

    const wishlistProductIds = wishlist?.products.map((item) => item.productId.toString() ) || [];



    return { accessToken, userName , role , cartProductIds , wishlistProductIds };
}

export const UserServices = {
    loginUser
}