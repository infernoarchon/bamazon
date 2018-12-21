DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Charmin Toilet Paper", "Household Goods", 20.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fender Guitar", "Musical Instruments", 256.68, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Razer Gaming Mouse", "Electronics", 69.99, 600);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Twilight: New Moon", "Books", 10.99, 1001);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Avengers: Infinity War Blu-ray + Digital Code", "Movies & TV", 18.96, 1000000);

SELECT * FROM products