const cookieParser = require("cookie-parser");
import express, { Request, response, Response } from 'express'
import bodyParser from 'body-parser'

import UsersRoutesHandlers from './models/Users/userRoutes'
import ProductRoutesHandlers from './models/Products/productRoutes'
import OrderRoutesHandlers from './models/Orders/orderRoutes'
import AuthRoutesHandlers from './models/Auth/AuthRoutes'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())
app.use(cookieParser());

// I think this could have been better done with a router, Abdullah 2022y/04m/16d
UsersRoutesHandlers(app);
ProductRoutesHandlers(app);
OrderRoutesHandlers(app);
AuthRoutesHandlers(app);

app.get('/', async function (req: Request, resp: Response) {
   resp.send(`
   <h1>Hello World</h1>
   <p>This is the store fron backend REST API, for Udacity Advanced Fullstack Track</p>
   <hr>
   <p><b>Endpoints<b></p>
   <ul>
         <li><a href="/api/products">Products</a></li>
         <li><a href="/api/products">Orders</a></li>
         <li><a href="/api/users">Users</a></li>
         <li><a href="/api/users">Auth</a></li>
    </ul>
   `)
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
