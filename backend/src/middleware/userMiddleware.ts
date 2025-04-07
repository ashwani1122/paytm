import jwt from "jsonwebtoken";
import  { JWT_SECRET }  from "../config";
import { NextFunction, Response, Request } from "express";
export default function userMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (token) {
        const tokenData = token.split(" ");
        if (tokenData.length === 2) {
            const tokenPayload = jwt.verify(tokenData[1],  JWT_SECRET);
            //@ts-ignore
            req.user = tokenPayload;
            next();
        } else {
            res.status(401).json({
                success: false,
                message: "Invalid token"
            });
        }
    } else {
        res.status(401).json({
            success: false,
            message: "No token provided"
        });
    }
}