import type { Request, Response, NextFunction } from "express";
import createOrderToDb from "../services/orderCreateToDb.service.js";

const createOrder = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const userId = (req as any).user.userId;
    const { productId, quantity } = req.body;

    if (!productId || quantity === undefined ) {
      throw new Error("Invalid request body");
    }
    const result = await createOrderToDb({ userId, productId, quantity });

    res.status(201).json({
      success: true,
      data: result,
    });

  } catch (error) {
    next(error);
  }
};

export const OrderController = {
  createOrder,
};