# Storefront Backend Project
This repo contains the storefront Backend Express app

## Used Technologies
the application makes use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing


## Installation
To run this project you need to have a running instance of postgreSQL and a database created. <br>
Please Follow the documentation below to learn how to install and run an instance<br>
https://www.postgresql.org/docs/

to install the project Please run the following command.

```
git clone https://github.com/abdalaosama/EgyptFWD_storefront_backend_project.git
cd EgyptFWD_storefront_backend_project
npm i
cp ENV_EXAMPLE.txt .env
```
- then you will need to provide the postgres Database creds in the .env File

## to run the project 
    
- make sure that postgres database server is up and running
- go into the the project directory.
- run `npm run start` in the terminal

## Steps of Completion
- Determined the RESTful route for each endpoint listed. Added the RESTful route and HTTP verb to the document so that the frontend developer can begin to build their fetch requests.  [Look at API ENDPOINTS in REQUIREMENTS.md File]

- Designd the Postgres database tables based off the data shape requirements. Add to the requirements document the database tables and columns being sure to mark foreign keys.   
----------------------------------------------------------
# Database Schema
### Product
- id                integer
- name              varchar(100)
- price             numeric

### User
- id                integer
- first_name        varchar(100)
- last_name         varchar(100)
- password          varchar(100)

### Order_headers
- id                integer
- user_id           integer FK (User.id)
- status_of_order   varchar(100) (active or complete) 

### Order_details
- id                integer
- order_id          integer FK (Order_headers)
- product_id        integer FK (Product.id)
- qty               integer
----------------------------------------------------------

### DONE 2.  DB Creation and Migrations, 

### DONE 3. Models 

### DONE 4. Express Handlers 

### DONE 5. JWTs 

### DONE 6. QA and `README.md` 

