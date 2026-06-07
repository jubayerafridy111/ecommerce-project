import Product from "../models/product.model.js";

const getAllProductsFromDb = async (query :  any) => {
    const filter : any = {};
    if (query.category) {
        filter.category = query.category;
    }
    if (query.search) {
        filter.name = { $regex: query.search, $options: "i" };
    }

        const result = await Product.find(filter)
            .populate("sellerId", "name email")
            .populate("shopId" , "name title");
        return result;

}

export default getAllProductsFromDb;