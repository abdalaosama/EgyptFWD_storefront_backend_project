CREATE TABLE order_detail (
    "line_id" SERIAL PRIMARY KEY,
    "order_id" INTEGER ,
    "product_id" INTEGER ,
    "qty" VARCHAR(10)
);