import type { ILoginAdmin } from "../interfaces/user.interface.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";



const loginAdmin = async (payload : ILoginAdmin ) => {
    const user = await User.findOne({ email: payload.email }).select("+password");
    if (!user) {
        throw new Error("User not found");
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
    return { accessToken };
}

export default loginAdmin ;