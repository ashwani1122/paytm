import { Router } from "express";
import { Request, Response } from "express";
import userMiddleware from "../middleware/userMiddleware";
import Account from "../dbSchema/db";
const accountRouter = Router();
accountRouter.get("/account", userMiddleware, async (req: Request, res: Response) => {
    //@ts-ignore
    const account = await Account.findOne({userId: req.user._id})
    res.json({
        success: true,
        account
    })
})
export default accountRouter