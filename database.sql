
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE product (
	id SERIAL PRIMARY KEY, 
	name VARCHAR(250),
	price NUMERIC,
	description VARCHAR(2048),
	image VARCHAR(120)
	);

INSERT INTO product (name, price, description, image)
  	VALUES
  	  ('Crying Cake', '45.99', 'This crying cake is perfect for a going away theme', 'images/crying-cake.jpeg'),
  	  ('Autumn Cake', '35.99', 'Fall themed cake for any fall occasion such as birthdays', 'images/autumn.jpeg'),
  	  ('Penguins Cake', '39.99', 'Penguin themed cake for winter occasions', 'images/penguin-cake.jpeg'),
  	  ('Patriotism Cake', '38.99', 'This patriotic theme screams for July 4th celebrations', 'images/usa.jpeg'),
  	  ('Flower Cake', '42.99', 'This flower cake is great for Spring lovers and flower lovers', 'images/flower-cake1.jpeg');