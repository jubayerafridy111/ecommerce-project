import moongoose from "mongoose";

const connectDB = async () => {
    try {
        
    await moongoose.connect(process.env.DATABASE_URL as string);
    console.log("database connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;