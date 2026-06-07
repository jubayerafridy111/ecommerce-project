import type { ICreateSeller } from "../interfaces/user.interface.js";
import Seller from "../models/seller.model.js";



const sellerCreateIntoDb = async (payload: ICreateSeller) => {
    const user = Seller.findOne({ email: payload.email });
    if (!user) {
        throw new Error("User already exists");
    }
    const newSeller = new Seller(payload);
    await newSeller.save();
}

export default sellerCreateIntoDb;