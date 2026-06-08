import type { Request, Response, NextFunction, } from "express";
import addCartToDb from "../services/addCartToDB.service.js";

const addCart = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const userId = (req as any).user.userId;
    const { productId, name, price, quantity } = req.body;

    if (!productId || !name || price === undefined ) {
      throw new Error("Invalid request body");
    }

    const result = await addCartToDb({ userId, productId, name, price});
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const CartController = {
  addCart,
};