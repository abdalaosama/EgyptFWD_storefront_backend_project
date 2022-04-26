# Storefront Backend Project
This repo contains the storefront Backend Express app

## Project Info "Port number for db and server."
the Nodejs Project start on the port `3000`
and it could be edited from the `server.ts` file in the `/src` directory.

the Default Postgres Database port is: `5432`

## Installation     "Package installation instructions. && Setup db and server instructions."
To run this project you need to have a running instance of postgreSQL and a database created. <br>
Please Follow the documentation below to learn how to install and run an instance<br>
https://www.postgresql.org/docs/

< Reviewer Note >
Hello,
I don't actually know what is meant by setup db instructions ?
You need to have a postgres Instance installed. The how to do that is a very wide an open subject
and depends on multiple factors which I know nothing about like what opreating system you are using
and what setup method you prefer (GUI/TERMINAL), so I have included the postgres docs above as a refrence for if you need to install an instance. Maybe you mean something else that I am not aware of. Please explain more :) 
Thank you!! 
</ Reviewer Note >

you need to execute the following SQL query to create the diffrenet required databases (which all could be one).
```
CREATE DATABASE prod; CREATE DATABASE test; CREATE DATABASE dev; 
```

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

## to test the project 
Please use the following
`npm run test`
## Used Technologies
the application makes use of the following libraries:
- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

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

