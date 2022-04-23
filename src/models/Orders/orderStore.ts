import db from '../../database';
export interface Order{
    "order_id"? :number,
    "user_id"? : string,
    "status"? : string
}

export default class OrderStore {

    //method to show a specific order in database by user_id
    async show(id: number): Promise<Order | null> {
        try {
            const query = (await db`SELECT * FROM order_headers INNER JOIN order_detail on order_headers.order_id = order_detail.order_id WHERE user_id = ${id};` as unknown) as Order[];
            let order: Order = query[0];
            return order;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async create(user_id: number){
        try {
            const query = (await db`INSERT INTO order_headers (user_id, status) VALUES (${user_id}, 'pending') RETURNING *;` as unknown) as Order[];
            let order: Order = query[0];
            return order;
        } catch (e) {
            console.log(e);
            return null;
        }
    }

    async fill_lines(order_id: number, product_id: number, quantity: number){
        try {
            const query = (await db`INSERT INTO order_detail (order_id, product_id, qty) VALUES (${order_id}, ${product_id}, ${quantity}) RETURNING *;` as unknown) as Order[];
            let order: Order = query[0];
            return order;
        } catch (e) {
            console.log(e);
            return null;
        }
    }
}