import express from "express";
export default function registerUsersRoutes (app: express.Application): void{
    app.get('/users', (req: express.Request , resp: express.Response):void => {
        resp.send("Hello From Users")
    })
}