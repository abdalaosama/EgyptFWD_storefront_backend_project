import express from "express";
import ProductStore, { Product } from "./productStore";

export default function ProductRoutesHandlers(app: express.Application): void{
    app.get('/api/products', async (req: express.Request, resp: express.Response) => {
        try{
            const product_store = new ProductStore()
            const Products: Product[] | null = await product_store.index();
            if ( Products === null) resp.json({})
            resp.json(Products)
        }catch(e){
            console.log(e)
            return;
        }
    });
    app.get('/api/products/:id', async (req: express.Request, resp: express.Response) => {
        try{
            const product_store = new ProductStore()
            const Product: Product | null = await product_store.show(req.params.id as unknown as number);
            console.log(Product)
            if ( Product == null ||  Product == undefined || !Product) return resp.json({success:false, message:"invalid product ID"})
            resp.json(Product)
        }catch(e){
            resp.status(500).json({success:false, message:"Internal Server Error"})
            console.log(e)
            return;
        }
    })
    app.post('/api/products', async (req: express.Request, resp: express.Response) => {
    })
}