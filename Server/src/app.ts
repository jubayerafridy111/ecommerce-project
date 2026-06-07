import express from "express";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import sellerRoutes from "./routes/seller.route.js";
import productRoutes from "./routes/product.route.js";


const app = express();

app.use(cors());
app.use(express.json());
app.get("/home" , (req,res) => res.send("Hello World"))
app.use("/api/v1/user" , userRoutes)
app.use("/api/v1/seller" , sellerRoutes)
app.use("/products" , productRoutes)



export default app;