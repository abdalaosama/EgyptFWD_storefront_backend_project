import request from "supertest";
import OrderStore from "../../models/Orders/orderStore";
import UsersStore from "../../models/Users/userStore";
import app from "../../server";

describe("users Endpoints.", () => {
    describe('GET  => /api/orders', () => {
        let data: request.Response;
        let jwt:any;
        beforeAll(async () => {
            await (await new UsersStore()).create({first_name: "test", last_name: "test", password:"test"})
            jwt = await request(app).post('/api/auth/login').send({first_name:"test", password:"test"});
            jwt = jwt.headers['set-cookie'][0].split('=')[1];
            await (await new OrderStore()).create(3);
            await (await new OrderStore()).fill_lines(1, 1, 1)
            

            data = await request(app).get('/api/orders').set('Cookie', [`token=${jwt}`]);
            console.log(jwt)
            console.log(data.body)
        });        

        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        })

        it("returns Order", () => {
            expect(data.body).toEqual(jasmine.objectContaining({"status": "pending","line_id": 1,"product_id": 1,"qty": "1"}));
        });
        
    });
});