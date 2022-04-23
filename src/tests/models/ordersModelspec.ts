import db from "../../database";
import OrderStore from "../../models/Orders/orderStore";
import UsersStore from "../../models/Users/userStore";


describe("Order Model", () => {
    let orderModel:any;
    beforeAll(async () => {
        orderModel = await new OrderStore();
    })

    describe("Create Order Header", () => {
        let result: any;
        beforeAll(async () => {
            result = await orderModel.create(1);
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })

        it("returns new order with ID = 1", () => {
            expect(result).toEqual(jasmine.objectContaining( {"order_id": 1, "user_id": 1}));
        })
    })

    describe("Create Order Detail", () => {
        let result: any;
        beforeAll(async () => {
            result = await orderModel.fill_lines(1, 1, 1);
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })
        it("returns new order detail with ID = 1", () => {
            expect(result).toEqual(jasmine.objectContaining( {"line_id": 1, "order_id": 1, "product_id": 1}));
        })
    });

    describe("Get Order By User ID", () => { 
        let result: any;
        beforeAll( async () => {
            result = await orderModel.show(1);
            console.log(result)
        })
        it("is defined", () => {
            expect(result).toBeDefined();
        });
        it("Returns Order", () => {
            expect(result).toEqual({order_id: 1,user_id: 1,status: 'pending',line_id: 1,product_id: 1,qty: '1'});
        })
    })
})