import Shop from "../models/shop.model.js";

const getMyShopsFromDb = async ( sellerId: string ) => {
  const shops = await Shop.find({ sellerId }).select("_id name");
  return shops;
};

export default getMyShopsFromDb;