import Cart from "../models/cart.model.js";

interface IGetCart {
  userId: string;
}

const getCartFromDb = async ( payload: IGetCart ) => {
  const result = await Cart.findOne({ userId: payload.userId})
  .populate("products.productId" );

  return result;
};

export default getCartFromDb;