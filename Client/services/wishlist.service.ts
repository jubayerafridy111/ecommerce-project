import { authApi } from "@/lib/authApi";

type AddWishlistPayload = {
  productId: string;
  name: string;
  price: number;
};

export const addWishlist = async (data: AddWishlistPayload) => {
  const res = await authApi.post("/wishlist/addWishlist", data);

  return res.data;
};