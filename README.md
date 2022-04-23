# Storefront Backend Project

## Getting Started
This repo contains the storefront Backend Express app

## Used Technologies
the application makes use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

## Steps of Completion

----------------------------------------------------------

- Determine the RESTful route for each endpoint listed. Add the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.    

GET  => /api/products       // index all the products
GET  => /api/product/:id    // get a specific product
POST => /api/product        // Create a product

GET  => /api/users          // Index a product
GET  => /api/user/:id       // show a user
POST => /api/user           // Create a user
POST => /api/auth/login     // login as a user

GET  => /api/user/:id/order // Get Current Order By ID
----------------------------------------------------------

- Design the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   

Product
- id                integer
- name              varchar(100)
- price             numeric

User
- id                integer
- first_name        varchar(100)
- last_name         varchar(100)
- password          varchar(100)

Order_headers
- id                integer
- user_id           integer FK (User.id)
- status_of_order   varchar(100) (active or complete) 

Order_details
- id                integer
- order_id          integer FK (Order_headers)
- product_id        integer FK (Product.id)
- qty               integer
----------------------------------------------------------

### 2.  DB Creation and Migrations, DONE

### 3. Models DONE

### 4. Express Handlers DONE

### 5. JWTs DONE

### 6. QA and `README.md` DONE

