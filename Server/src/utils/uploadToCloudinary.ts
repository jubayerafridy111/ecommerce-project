import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const uploadToCloudinary = (
  file: Express.Multer.File
) => {
  return new Promise<string>(
    (resolve, reject) => {

      const stream =
        cloudinary.uploader.upload_stream(
          {
            folder: "ecommerce-products",
          },
          (error, result) => {

            if (error) {
              reject(error);
              return;
            }

            resolve(
              result!.secure_url
            );
          }
        );

      streamifier
        .createReadStream(
          file.buffer
        )
        .pipe(stream);
    }
  );
};

export default uploadToCloudinary;