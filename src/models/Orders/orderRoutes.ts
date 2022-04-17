import express from "express";
import OrderStore, {Order} from "./orderStore";

export default function OrderRoutesHandlers(app: express.Application): void {
    app.get('/api/orders', async (req: express.Request, resp: express.Response) => {
        try{
            const order_store = new OrderStore()
            const Orders: Order[] | null = await order_store.index();
            if ( Orders === null) resp.json({})
            resp.json(Orders)
        }catch(e){
            console.log(e)
            return;
        }
    });
}