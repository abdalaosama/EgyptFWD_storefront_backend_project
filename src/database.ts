//copied from the postgres npm package docs.
//https://github.com/porsager/postgres#usage
import postgres from 'postgres';
import 'dotenv/config';

const {
    TEST_DB_USERNAME,TEST_DB_PASSWORD,TEST_DB_HOST,TEST_DB_DATABASE_NAME,
    DEV_DB_USERNAME,DEV_DB_PASSWORD,DEV_DB_HOST,DEV_DB_DATABASE_NAME,
    PROD_DB_USERNAME,PROD_DB_PASSWORD,PROD_DB_HOST,PROD_DB_DATABASE_NAME,
    ENV_MODE
} = process.env;
let CONN_CONFIG;

switch(ENV_MODE){
    case "PROD":
        CONN_CONFIG ={
            host     : PROD_DB_HOST,            
            database : PROD_DB_DATABASE_NAME,            
            username : PROD_DB_USERNAME,            
            password : PROD_DB_PASSWORD,            
        }
        break;
    case "TEST":
        CONN_CONFIG = {
            host     : TEST_DB_HOST,            
            database : TEST_DB_DATABASE_NAME,            
            username : TEST_DB_USERNAME,            
            password : TEST_DB_PASSWORD,            
        }
        break;
    case "DEV":
        CONN_CONFIG = {
            host     : DEV_DB_HOST,            
            database : DEV_DB_DATABASE_NAME,            
            username : DEV_DB_USERNAME,            
            password : DEV_DB_PASSWORD,            
        }
        break;
}

console.log(CONN_CONFIG)
const db = postgres(CONN_CONFIG)


export default db
