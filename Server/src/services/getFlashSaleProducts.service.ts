import Product from "../models/product.model.js";

const getFlashSaleProducts = async () => {
    const result = await Product.find({ flashSale: true });
    return result;
}

export default getFlashSaleProducts;