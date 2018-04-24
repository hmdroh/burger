CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
    id int(11) auto_increment not null,
    burger_name VARCHAR(100),
    devoured BOOLEAN,
    primary key(id)
);