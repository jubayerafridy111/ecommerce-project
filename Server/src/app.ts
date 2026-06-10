import express from "express";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import wishlistRoutes from "./routes/wishlist.route.js";
import orderRoutes from "./routes/order.route.js";
import shopRoutes from "./routes/shop.route.js";


const app = express();

app.use(cors());
app.use(express.json());
app.get("/home" , (req,res) => res.send("Hello World"))
app.use("/api/v1/user" , userRoutes)
app.use("/products" , productRoutes)
app.use("/cart" , cartRoutes)
app.use("/wishlist" , wishlistRoutes)
app.use("/order" , orderRoutes)
app.use("/shop" , shopRoutes)




export default app;