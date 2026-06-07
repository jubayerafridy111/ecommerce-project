import {Schema , model} from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength : 3
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        min : 1
    },
    title : {
        type: String,
        required: true,
        trim: true,
    },
    description : {
        type: String,
        required: true,
        trim: true,
        maxlength : 200
    },
    category : {
        type: String,
        required: true,
        trim: true,
    },
    rating : {
        type: Number,
        min : 1,
        max : 5
    },
    flashSale : {
        type: Boolean,
        default: false,
    },

    sellerId : {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    },
    shopId : {
        type: Schema.Types.ObjectId,
        ref: "Shop",
        required: true,
    }
},
{
    timestamps : true,
})

const Product = model("Product", productSchema);

export default Product;