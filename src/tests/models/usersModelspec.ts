import UsersStore from "../../models/Users/userStore";
import bcrypt from 'bcrypt';

describe("Users Model", () => {
    let userStore: any;
    const user = {"first_name": "test_user", "last_name": "test_user_lastname", "password":"test_pwd"}
    beforeAll(async () => {
        userStore = new UsersStore;
    })

    describe("create a user", () => {
        let newUser : any;
        beforeAll(async () => {
            newUser = await userStore.create(user);
        })

        it("is defined", () => {
            expect(newUser).toBeDefined();
        })

        it("returns new user", () => {
            expect(newUser[0]).toEqual(jasmine.objectContaining( {"first_name": "test_user", "last_name": "test_user_lastname"}));
        })

    })

    describe("show a user with a specific ID", () => {
        let result: any;
        beforeAll(async () => {
            result = await userStore.show(1);
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })

        it("returns new user with ID = 1", () => {
            expect(result[0]).toEqual(jasmine.objectContaining( {"first_name": "test_user", "last_name": "test_user_lastname"}));
        })
    })

    describe("index users", () => {
        let result: any;
        beforeAll(async () => {
            result = await userStore.index();
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })

        it("returns new user with ID = 1", () => {
            expect(result[0]).toEqual(jasmine.objectContaining( {"first_name": "test_user", "last_name": "test_user_lastname"}));
        })
    })

    describe("look up user by username and password", () => {
        let result: any;
        beforeAll(async () => {
            result = await userStore.Lookup({first_name:"test_user", password:"test_pwd"});
        })

        it("is defined", () => {
            expect(result).toBeDefined();
        })

        it("returns new user with ID = 1", () => {
            expect(result).toEqual(jasmine.objectContaining( {"first_name": "test_user", "last_name": "test_user_lastname", uid: 1}));
        })
    })
})