import { Router } from "express";
import { Request, Response } from "express";
import User from "../dbSchema/db";
const usersRouter = Router();
usersRouter.get("/bulk", async (req: Request, res: Response) => {
    const filter = req.query.filter || "";
    //@ts-ignore
    const users = await User.find({
        $or: [{
            firstName: { 
                "$regex": filter 
            }
        },
        {
            lastName: { 
                "$regex": filter 
            }
        }]
    });
    res.json({
        success: true,
        //@ts-ignore
        users: users.map(user =>({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            _id: user._id
    }))});
});
export default usersRouter