import { Schema , model} from "mongoose";

const shopSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlenth : 3
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        maxlenth : 200
    },
    sellerId : {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        required: true,
    }
});

const Shop = model("Shop", shopSchema);

export default Shop;