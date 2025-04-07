import { Router } from "express";
import { Request, Response } from "express";
import userMiddleware from "../middleware/userMiddleware";
import User from "../dbSchema/db";
const updateDetails = Router();

updateDetails.put("/updateDetails", userMiddleware, async (req: Request, res: Response) => {
    //@ts-ignore
    const { success } = updateDetails.safeParse(req.body);
    if(!success){
        res.status(400).json({
            success: false,
            message: "Invalid data"
        })
    }
    else{
        //@ts-ignore
        await User.updateOne(req.body ,{id: req.user._id})
        res.status(200).json({
            success: true,
            message: "Details updated successfully"
        })
    }       
})