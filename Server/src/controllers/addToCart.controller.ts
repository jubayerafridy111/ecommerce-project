import type { Request, Response, NextFunction, } from "express";
import addCartToDb from "../services/addCartToDB.service.js";
import getCartFromDb from "../services/getCartFromDb.service.js";

const addCart = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const userId = (req as any).user.userId;
    const { productId } = req.body;

    if (!productId) {
      throw new Error("Invalid request body");
    }

    const result = await addCartToDb({ userId, productId });
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getCart = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const userId = (req as any).user.userId;

    const result = await getCartFromDb({ userId });
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
  getCart,

};