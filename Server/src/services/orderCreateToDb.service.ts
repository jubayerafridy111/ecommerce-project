import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";
import Product from "../models/product.model.js";
import type { ICreateOrder } from "../interfaces/user.interface.js";

const createOrderToDb = async (
  payload: ICreateOrder
) => {
  let totalPrice = 0;

  const orderProducts = [];

  for (const item of payload.products) {
    const product =
      await Product.findById(
        item.productId
      );

    if (!product) {
      throw new Error(
        "Product not found"
      );
    }

    totalPrice +=
      product.price *
      item.quantity;

    orderProducts.push({
      productId:
        item.productId,

      quantity:
        item.quantity,

      priceAtPurchase:
        product.price,
    });
  }

  const newOrder = new Order({
    userId: payload.userId,

    products: orderProducts,

    totalPrice,
  });

  await newOrder.save();

  const cart =
    await Cart.findOne({
      userId:
        payload.userId,
    });

  if (cart) {
    for (const orderedItem of payload.products) {
  cart.products.pull({
    productId: orderedItem.productId,
  });
}

await cart.save();
  }

  return newOrder;
};

export default createOrderToDb;