import type { ICreateProduct } from "../interfaces/user.interface.js";
import Product from "../models/product.model.js";
import uploadToCloudinary from "../utils/uploadToCloudinary.js";

const createProductIntoDb = async (
  payload: ICreateProduct,
  files: Express.Multer.File[]
) => {

  const imageUrls = await Promise.all(
    files.map((file) =>
      uploadToCloudinary(file)
    )
  );

  const productData = {
    ...payload,
    images: imageUrls,
    price: Number(payload.price),
  };

  const newProduct =
    new Product(productData);

  await newProduct.save();

  return newProduct;
};

export default createProductIntoDb;