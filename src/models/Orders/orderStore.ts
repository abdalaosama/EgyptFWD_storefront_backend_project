import db from '../../database';
export interface Order{
    "order_id"? :number,
    "user_id"? : string,
    "status"? : string
}

export default class OrderStore {
    //method to index all orders in database
    async index(): Promise<Order[] | null> {
        try {
            const query = (await db`SELECT * FROM order_headers;` as unknown) as Order[];
            let orders: Order[] = query;
            return orders;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    //method to show a specific order in database
    async show(id: number): Promise<Order | null> {
        try {
            const query = (await db`SELECT * FROM order_headers WHERE order_id = ${id};` as unknown) as Order[];
            let order: Order = query[0];
            return order;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

}