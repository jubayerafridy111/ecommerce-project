import Product from "../models/product.model.js";

const singleProduct = async (productId : string) => {
    const result = await Product.findById(productId)
    .populate("sellerId", "name email")
    .populate("shopId" , "name title");
    return result;
}




export default singleProduct;