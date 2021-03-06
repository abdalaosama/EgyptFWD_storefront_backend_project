import db from "../../database";

export interface Product {
    "prod_id"? :number,
    name : string,
    price : number
}

export default class ProductStore {
    async index(): Promise<Product[] | null>{
        try {
            const query = (await db`SELECT * FROM products` as unknown) as Product[] ;
            let products: Product[] = query;
            return products
        }catch(e){
            console.log(e);
            throw(e)
            // return null;
        }
    }

    async show(id: number): Promise<Product | null>{
        try {
            const query = (await db `SELECT * FROM products WHERE prod_id = ${id}` as unknown) as Product;
            let product: Product = query;
            return product
        }catch(e){
            console.log(e);
            throw(e)
            // return null;
        }
    }

    async create(product: Product): Promise<Product | null>{
        try {
            const query = (await db `INSERT INTO products (name, price) VALUES (${product.name}, ${product.price}) RETURNING *;` as unknown) as Product;
            console.log(query)
            return query

        } catch (error) {
            console.log(error)
            throw (error);
        }

        return null
    }
}
