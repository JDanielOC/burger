-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;
-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "burger_name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN NOT NULL,
  -- Makes an TIMESTAMP column called "date" --
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);