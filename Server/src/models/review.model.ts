import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    comment: {
      type: String,
      trim: true,
      minlength: 5,
      maxlength: 500,
    },
  },
  {
    timestamps: true,
  }
);

reviewSchema.index(
  {
    user: 1,
    product: 1,
  },
  {
    unique: true,
  }
);

const Review = model("Review", reviewSchema);

export default Review;