import type { Request, Response, NextFunction } from "express";
import addWishlistToDb from "../services/addWishlistToDb.service.js";

const addWishlist = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const userId = (req as any).user.userId;

    const { productId } = req.body;

    if ( !productId ) {
      throw new Error("Invalid request body");
    }

    const result = await addWishlistToDb({ userId, productId });
    res.status(200).json({
      success: true,
      data: result,
    });

  } catch (error) {
    next(error);
  }
};

export const WishlistController = {
  addWishlist,
};