import express, { Request, response, Response } from 'express'
import bodyParser from 'body-parser'
import registerUsersRoutes from './models/Users/userRoutes'
import ProductStore, { Product } from './models/Products/productStore'
import ProductRoutesHandlers from './models/Products/productRoutes'
// import ProductStore from './models/Products/productStore'

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(bodyParser.json())


registerUsersRoutes(app);
ProductRoutesHandlers(app);


app.get('/', async function (req: Request, resp: Response) {
   resp.send(`
   <h1>Hello World</h1>
   <p>This is the store fron backend REST API, for Udacity Advanced Fullstack Track</p>
   <hr>
   <p><b>Endpoints<b></p>
   <ul>
         <li><a href="/api/products">Products</a></li>
            <li><a href="/api/users">Users</a></li>
    </ul>
   `)
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
