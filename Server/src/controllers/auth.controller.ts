import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authUser = ( req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authorization.split(" ")[1];

    const decoded = jwt.verify(
      token as string,
      process.env.JWT_ACCESS_SECRET as string
    );

    (req as any).user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export default authUser;