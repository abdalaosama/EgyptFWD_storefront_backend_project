import db from "../../database";
import Auth from "../../models/Auth/AuthModel";
import userStore from "../../models/Users/userStore";


describe("Auth Model", () => {
    let authModel: any;
    beforeAll(async () => {
        authModel = await new Auth();
    })
    describe("Login", () => {

        let result: any;
        beforeAll(async () => {
            let usersStore = await new userStore();
            await usersStore.create({first_name:"test_user", password:"test_pwd", last_name:"test_user_lastname"})

            result = await authModel.login({first_name:"test_user", password:"test_pwd"})
            
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })

        it("returns the authenticaed User", () =>{
            expect(result).toEqual(jasmine.objectContaining( {"first_name": "test_user", "last_name": "test_user_lastname"}))
        })
    })
})