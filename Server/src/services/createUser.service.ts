import type { ICreateUser } from "../interfaces/user.interface.js";
import User from "../models/user.model.js";



const userCreateIntoDb = async (payload: ICreateUser) => {
    const user = User.findOne({ email: payload.email });
    if (!user) {
        throw new Error("User already exists");
    }
    const newUser = new User(payload);
    await newUser.save();
}

export default userCreateIntoDb;