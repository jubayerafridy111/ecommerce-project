"use client";

import { useDispatch } from "react-redux";
import { addToWishlist } from "@/redux/features/wishlistSlice";
import { addWishlist } from "@/services/wishlist.service";

type Props = {
  product: {
    _id: string;
    name: string;
    price: number;
  };
};

export default function AddToWishlistButton({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToWishlist = async () => {
    dispatch(addToWishlist(product));

    try {
      await addWishlist({
        productId: product._id,
        name: product.name,
        price: product.price,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button
      onClick={handleAddToWishlist}
      className="mt-8 border border-red-500 text-red-500 px-8 py-3 rounded-lg hover:bg-red-50 transition"
    >
      Add to Wishlist
    </button>
  );
}