import db from "../../database";
import bcrypt from "bcrypt";
export interface User {
    uid? :number,
    first_name: string,
    last_name: string,
    password : string,
    [key: string] : any
}

export default class UsersStore {
    async index (): Promise<User[] | null> {
        try{
            const query = (await db`SELECT * FROM users` as unknown) as User[];
            let users: User[] = query;
            return users;

        } catch(e) {
            console.log(e);
            return null;
        }
    }

    async show (uid: number): Promise<User | null> {
        try{
            const query = (await db`SELECT * FROM users WHERE uid = ${uid}` as unknown) as User;
            let user: User = query;
            return user;
        } catch(e) {
            console.log(e);
            return null;
        }
    
    }

    async create ( u: User): Promise<User | null> {
        try{
            // hash password using bcrypt 
            const hashedPassword = await bcrypt.hash(u.password, 10);

            const query = (await db`INSERT INTO users (first_name, last_name, password) VALUES (${u.first_name}, ${u.last_name}, ${hashedPassword}) RETURNING *;` as unknown) as User;
            let user: User = query;
            return user;
        }catch(e){
            console.log(e);
            return null;
        }
    }

    async Lookup ( u: User): Promise<User | null> {
        try{
            // hash password using bcrypt 
            
            const query = (await db`SELECT * FROM users WHERE first_name = ${u.first_name}` as unknown) as User;
            const passwordValid = await bcrypt.compare(u.password, query[0].password )
            if(!passwordValid) return null;

            let user: User = query[0];
            return user;
        }catch(e){
            console.log(e);
            return null;
        }
    }
            

    

}

