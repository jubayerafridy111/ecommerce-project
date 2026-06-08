import Cart from "../models/cart.model.js";
import type { IAddCart } from "../interfaces/user.interface.js";

const addCartToDb = async ( payload: IAddCart ) => {

  let cart = await Cart.findOne({ userId : payload.userId });

  if (!cart) {
  const newCart = new Cart({
                        userId: payload.userId,
                        products: [
                        {
                            productId: payload.productId,
                            name: payload.name,
                            price: payload.price,
                        },
                        ],
  });

  await newCart.save();
  return newCart;
}

  const existingProduct = cart.products.find((item) =>item.productId.toString() === payload.productId);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.products.push({
      productId: payload.productId,
      name: payload.name,
      price: payload.price,
    });
  }

  await cart.save();

  return cart;
};

export default addCartToDb;