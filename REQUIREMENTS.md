# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 


----------------------------------------------------------
## API Endpoints

<b>GET  => /api/products       // index all the products<br>
GET  => /api/product/:id    // get a specific product<br>
POST => /api/product        // Create a product {Auth Required}<br>

GET  => /api/users          // Index a product {Auth Required}<br>
GET  => /api/user/:id       // show a user {Auth Required}<br>
POST => /api/user           // Create a user<br>
POST => /api/auth/login     // login as a user<br>
</b>
<b>
GET  => /api/orders // Get Current Order By ID {Auth Required}<br>
</b>

---------------------------------------------
## Data Shapes
#### Product
-  id integer
- name varchar(100)
- price numeric
- [OPTIONAL] category

#### User
- id integer
- firstName varchar(100)
- lastName varchar(100)
- password varchar(100)

#### Orders
- id integer
- id of each product in the order integer FK
- quantity of each product in the order integer
- user_id integer
- status of order (active or complete) varchar(100)

