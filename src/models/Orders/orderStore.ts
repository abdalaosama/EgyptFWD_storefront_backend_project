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

}