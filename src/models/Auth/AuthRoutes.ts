import express from "express";
import UsersStore, { User } from "../Users/userStore";
import jsonwebtoken from 'jsonwebtoken';

export default function AuthRoutesHandlers(app: express.Application): void {
    app.post("/api/auth/login", async (req: express.Request, resp: express.Response) => {
        try {
            const user_store = new UsersStore();
            const user: User | null = await user_store.Lookup(req.body as unknown as User);
            if (user === null || user === undefined || !user || user.count == 0) {resp.json({success: false, Message: "invalid username/password, Please try again"}); return;};
            
            const jwt = jsonwebtoken.sign(user.uid as unknown as string, process.env.JWT_SECRET as jsonwebtoken.Secret)
            resp.setHeader('set-cookie', [`token=${jwt}`]);
            resp.json({success: true, Message: "Login Successful"});
            
        } catch (e) {
            console.log(e);
            resp.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
            return;
        }
    });
}