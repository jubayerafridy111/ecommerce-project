"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/features/cartSlice";
import { addCart } from "@/services/cart.service";

type Props = {
  product: {
    _id: string;
    name: string;
    price: number;
  };
};

export default function AddToCartButton({product}: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    dispatch(addToCart(product));

    try {
      await addCart({
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
      onClick={handleAddToCart}
      className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
}