import type { Request, Response } from "express";
import createProductToDb from "../services/createProduct.service.js";

const createProduct = async ( req: Request, res: Response) => {
  try {
    const { name, title, description, category, price, shopId } = req.body;

    const sellerId = (req as any).user.userId;

    const files = req.files as Express.Multer.File[];

    const result = await createProductToDb({ name, title, description, category,
          price,
          shopId,
          sellerId,
        },
        files
      );

    return res.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message:
        "Failed to create product",
    });
  }
};

export default createProduct;