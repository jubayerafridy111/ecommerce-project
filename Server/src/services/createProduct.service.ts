import type { ICreateProduct } from "../interfaces/user.interface.js";
import Product from "../models/product.model.js";

const productCreateIntoDb = async (payload: ICreateProduct) => {
    const newProduct = new Product(payload);
    await newProduct.save();
}

export default productCreateIntoDb;