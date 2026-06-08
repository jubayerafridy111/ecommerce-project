import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type WishlistItem = {
  _id: string;
  name: string;
  price: number;
};

type WishlistState = {
  items: WishlistItem[];
};

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",

  initialState,

  reducers: {
    addToWishlist: (
      state,
      action: PayloadAction<WishlistItem>
    ) => {
      state.items.push(action.payload);
    },

    removeFromWishlist: (
      state,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload
      );
    },

    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;