import Admin from "./../models/admin.model.js";
import type { ICreateAdmin } from "./../interfaces/user.interface.js";



const adminCreateIntoDb = async (payload: ICreateAdmin) => {
    const user = Admin.findOne({ email: payload.email });
    if (!user) {
        throw new Error("User already exists");
    }
    const newAdmin = new Admin(payload);
    await newAdmin.save();
}


export default adminCreateIntoDb;