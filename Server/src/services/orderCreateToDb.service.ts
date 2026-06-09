import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import type { ICreateOrder } from "../interfaces/user.interface.js";

const createOrderToDb = async ( payload: ICreateOrder ) => {

  const product = await Product.findById( payload.productId );

  if (!product) {
    throw new Error("Product not found");
  }

  const totalPrice = product.price * payload.quantity;

  const newOrder = new Order({
    userId: payload.userId,

    products: [
      {
        productId: payload.productId,
        quantity: payload.quantity,
      },
    ],

    totalPrice,
  });

  await newOrder.save();

  const cart = await Cart.findOne({userId: payload.userId });

if (cart) {
  cart.products.pull({
    productId: payload.productId,
  });

  await cart.save();
}

return newOrder;
};

export default createOrderToDb;