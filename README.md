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

GET => /products        // index all the products
GET => /product/:id     // get a specific product
POST => /product        // Create a product

GET => /users           // Index a product
GET => /user/:id        // show a user
POST => /user           // Create a user

GET => user/:id/order   // Get Current Order By ID
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

### 2.  DB Creation and Migrations

Now that you have the structure of the databse outlined, it is time to create the database and migrations. Add the npm packages dotenv and db-migrate that we used in the course and setup your Postgres database. If you get stuck, you can always revisit the database lesson for a reminder. 

You must also ensure that any sensitive information is hashed with bcrypt. If any passwords are found in plain text in your application it will not pass.

### 3. Models

Create the models for each database table. The methods in each model should map to the endpoints in `REQUIREMENTS.md`. Remember that these models should all have test suites and mocks.

### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
