import express from "express";
import Auth from "../models/Auth/AuthModel";
import jsonwebtoken from 'jsonwebtoken';
import UsersStore, {User} from "../models/Users/userStore";

export async function getAuth(req: express.Request | any, resp: express.Response, next: express.NextFunction): Promise<void> {
    try {
        const user_store = new UsersStore();
        console.log(req.cookie)
        const userID =  jsonwebtoken.verify(req.cookies.token, process.env.JWT_SECRET as jsonwebtoken.Secret) as string;
        const user: User | null = await user_store.show(parseInt(userID));

        if (user === null || user === undefined || !user) {throw new Error("invalid user ID")}
        req.auth = user[0];
        next();
        return
    } catch (e) {
        console.log(e);
        req.auth = null
        next();
        return;
    }
}

export function requireAuth(req: express.Request, resp: express.Response, next: express.NextFunction): void {
    
    if( !(req as any).auth || (req as any ).auth == null){
        resp.status(401).json({
            success: false,
            message: "Unauthorized"
        });
        return;
    }

    next()
    return;
}