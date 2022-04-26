import request from "supertest";
import ProductStore, {Product} from "../../models/Products/productStore";
import UsersStore from "../../models/Users/userStore";
import app from "../../server";

describe("Product Endpoints.", () => {

    beforeAll(async () => {

        
    })
    describe('GET  => /api/products', () => {
        let data: request.Response;
        beforeAll(async () => {
            await (await new UsersStore()).create({first_name: "test", last_name: "test", password:"test"})
            await (await new ProductStore()).create({name:"new_prod", price:10});
            data = await request(app).get('/api/products');
            console.log("-------------------------------")
            // console.log(data.body)
        });

        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        })

        it("returns Product", () => {
            expect(data.body[1]).toEqual(jasmine.objectContaining({name:"new_prod", price:"10"}))
        })
    });


    describe('/api/products/:id', () => {
        let data: request.Response;
        beforeAll(async () => {
            data = await request(app).get('/api/products/2');
            // console.log("-------------------------------")
            // console.log(data.body)
        });        

        it("Response is defined", () => {
            expect(data.body[0]).toBeDefined()
        })
        it("Returns product with ID 1", () => {
            expect(data.body[0]).toEqual(jasmine.objectContaining({name:"new_prod", price:"10"}));
        })
    });

    describe('/api/product', () => {
        let data: request.Response;
        beforeAll(async () => {
            let jwt = await request(app).post('/api/auth/login').send({first_name:"test", password:"test"});
            jwt = jwt.headers['set-cookie'][0].split('=')[1];
            data = await request(app).post('/api/products').set('Cookie', [`token=${jwt};`]).send({name:"new_prod", price:10});
            // console.log(data)
        });
        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        })
        it("Return newley Created Product", () => {
            expect(data.body[0]).toEqual(jasmine.objectContaining({name:"new_prod", price:"10"}))
        })
    });
});