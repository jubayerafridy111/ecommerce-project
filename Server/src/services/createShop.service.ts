import Shop from "../models/shop.model.js";
import type { ICreateShop } from "../interfaces/user.interface.js";

const shopCreateIntoDb = async (payload: ICreateShop) => {
    const newShop = new Shop(payload);
    await newShop.save();
    console.log("failed to create shop");
}

export default shopCreateIntoDb;