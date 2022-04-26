import request from "supertest";
import app from "../../server";

describe("users Endpoints.", () => {

    describe('GET  => /api/users', () => {
        let data: request.Response;
        beforeAll(async () => {
            data = await request(app).get('/api/users');
            // console.log(data.body)
        });        
        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        });

        it("returns User", () => {
            expect(data.body[1]).toEqual(jasmine.objectContaining({first_name:"test_user", last_name:"test_user_lastname"}));
        });

    });
    describe('GET  => /api/users/:id', () => {
        let data: request.Response;
        beforeAll(async () => {
            data = await request(app).get('/api/users/1');
            // console.log(data)
        });        

        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        })
        
        it("returns User with ID 1", () => {
            expect(data.body[0]).toEqual(jasmine.objectContaining({first_name:"test_user", last_name:"test_user_lastname"}));
        })

    });

    describe('POST => /api/auth/login', () => {
        let data: request.Response;
        let jwt:any;
        beforeAll(async () => {
            jwt = await request(app).post('/api/auth/login').send({first_name:"test", password:"test"});
            jwt = jwt.headers['set-cookie'][0].split('=')[1];

        });        
        it("Response is defined", () => {
            expect(jwt).toBeDefined()
        })
        it("returns JWT", () => {
            expect(typeof jwt).toEqual("string");
        })
        // console.log(data.body.data)
    });

    describe('POST => /api/users', () => {
        let data: request.Response;
        beforeAll(async () => {
            data = await request(app).get('/api/users');
            // console.log(data.body.data)
        });        
        it("Response is defined", () => {
            expect(data.body).toBeDefined()
        })

        it("returns Newley Created User User", () => {
            expect(data.body[1]).toEqual(jasmine.objectContaining({first_name:"test_user", last_name:"test_user_lastname"}));
        });

    });



});