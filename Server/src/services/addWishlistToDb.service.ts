import Wishlist from "../models/wishlist.model.js";
import type { IAddWishlist } from "../interfaces/user.interface.js";

const addWishlistToDb = async (payload: IAddWishlist) => {

  const wishlist = await Wishlist.findOne({
    userId: payload.userId,
  });

  if (!wishlist) {
    const newWishlist = new Wishlist({
      userId: payload.userId,
      products: [
        {
          productId: payload.productId,
          name: payload.name,
          price: payload.price,
        },
      ],
    });

    await newWishlist.save();

    return newWishlist;
  }

  const existingProduct = wishlist.products.find((item) =>item.productId.toString() === payload.productId );

  if (!existingProduct) {
    wishlist.products.push({
      productId: payload.productId,
      name: payload.name,
      price: payload.price,
    });
  }

  await wishlist.save();

  return wishlist;
};

export default addWishlistToDb;