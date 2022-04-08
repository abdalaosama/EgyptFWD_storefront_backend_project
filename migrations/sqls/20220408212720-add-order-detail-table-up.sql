CREATE TABLE order_detail (
    "line_id" SERIAL PRIMARY KEY,
    "order_id" INTEGER REFERENCES order_headers("order_id"),
    "product_id" INTEGER REFERENCES products("prod_id"),
    "qty" VARCHAR(10)
);