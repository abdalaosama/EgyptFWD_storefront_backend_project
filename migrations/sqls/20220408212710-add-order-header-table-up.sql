CREATE TABLE order_headers (
    "order_id" SERIAL PRIMARY KEY,
    "user_id" INTEGER REFERENCES users(uid),
    "status" VARCHAR(10)
);

