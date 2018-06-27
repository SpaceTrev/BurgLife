DROP DATABASE IF EXISTS burgersDB;
CREATE DATABASE burgersDB;
USE burgersDB;
CREATE TABLE burgers (
    id int auto_increment not null,
    name varchar(470) not null,
    devoured boolean default false,
    primary key (id)
);