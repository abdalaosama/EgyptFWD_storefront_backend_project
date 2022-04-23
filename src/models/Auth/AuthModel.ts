import express from 'express';
import UsersStore, {User} from "../Users/userStore";
import jsonwebtoken from 'jsonwebtoken';
import { config } from 'dotenv';

export default class Auth{
    async login(UserInfo: User): Promise<User | null>{
        try{
            const user_store = new UsersStore();
            const user: User | null = await user_store.Lookup(UserInfo);
            if (user === null || user === undefined || !user) {return null}
            return (user);
        }catch(e){
            console.log(e);
        return null;
    }
    }
}