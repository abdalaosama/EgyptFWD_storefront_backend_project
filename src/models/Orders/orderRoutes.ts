import express from "express";
import { getAuth, requireAuth } from "../../utils/auth_middleware";
import OrderStore, {Order} from "./orderStore";

export default function OrderRoutesHandlers(app: express.Application): void {
    app.get('/api/orders', getAuth, requireAuth, async (req: express.Request, resp: express.Response) => {
        try{
            const order_store = new OrderStore()
            const Orders: Order | null = await order_store.show((req as any).auth.uid);
            if ( Orders === null) resp.json({success: false, Message: "No Current Orders"})
            resp.json(Orders)
        }catch(e){
            resp.status(500).json({success:false, message:"Internal Server Error"})
            console.log(e)
            return;
        }
    });
}