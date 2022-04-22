import express from "express";
import  UsersStore, { User } from "./userStore";


export default function UsersRoutesHandlers (app: express.Application): void{
    app.get('/api/users', async (req: express.Request , resp: express.Response): Promise<void> => {
        try{
            const user_store = new UsersStore();
            const users: User[] | null = await user_store.index();
            if (users === null) resp.json({success:false, message:"No users found"});
            resp.json(users);
        }catch(e){
            console.log(e)
            resp.status(500).json({success:false, message:"Internal Server Error"});
            return;
        }   
    })

    app.get('/api/users/:id', async (req: express.Request, resp: express.Response): Promise<void> => {
        try{
            const user_store = new UsersStore();
            const user: User | null = await user_store.show(req.params.id as unknown as number);
            if (user === null || user === undefined || !user) resp.json({success:false, message:"invalid user ID"});
            resp.json(user);
        }catch(e){
            console.log(e)
            resp.status(500).json({success:false, message:"Internal Server Error"});
            return;
        }
    })

    app.post('/api/users', async (req: express.Request, resp: express.Response): Promise<void> => {
        try{
            const user_store = new UsersStore();
            const user: User | null = await user_store.create(req.body);
            if (user === null || user === undefined || !user){ resp.json({success:false, message:"invalid user"}); return;};
            resp.json(user);
        }catch(e){
            console.log(e)
            resp.status(500).json({success:false, message:"Internal Server Error"});
            return;
        }
    })
}