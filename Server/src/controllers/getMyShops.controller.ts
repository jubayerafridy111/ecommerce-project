import type { Request, Response, NextFunction } from "express";
import getMyShopsFromDb from "../services/getMyShops.service.js";

const getMyShops = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const sellerId = (req as any).user.userId;

    const result = await getMyShopsFromDb( sellerId );

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default getMyShops;