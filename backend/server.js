import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js"

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows user to accept json data in the body


app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
})

// 7wBt52zY89CRvJkt