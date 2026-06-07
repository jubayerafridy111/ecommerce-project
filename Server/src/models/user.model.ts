import { Schema, model} from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlenth : 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/
    },
    password: {
        type: String,
        required: true,
        select: false,
        minlenth : 6

    },
    role: {
        type: String,
        enum: ["user", "seller", "moderator", "admin"],
        default: "user",
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
},
{
    timestamps : true,
}
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return;
    }
    this.password = await bcrypt.hash(this.password, 10);

});

userSchema.methods.comparePassword = async function ( password: string) {
    return await bcrypt.compare(password, this.password);
}
    

const User = model("User", userSchema);

export default User;