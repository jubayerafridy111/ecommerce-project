import { authApi } from "@/lib/authApi";

type AddCartPayload = {
  productId: string;
  name: string;
  price: number;
};

export const addCart = async ( data: AddCartPayload) => {
  const res = await authApi.post("/cart/addCart", data );

  return res.data;
};