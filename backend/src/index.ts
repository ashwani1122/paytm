import express from "express";
import userRouter from "./routes/userRoute";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRouter);
// app.use("/api/v1/user/signin", userRouter); 
async function main(){
    await mongoose.connect("mongodb+srv://ashwanisingh:elVZUtternK9kiNa@cluster0.vk9uv.mongodb.net/paytmdb").then(() => {
        app.listen(3000, () => {
            console.log("Server is listening on port 3000");
        })
    })
}
main();