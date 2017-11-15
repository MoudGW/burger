create database burgers_db;
use burgers_db;
create table burgers(
ID int auto_increment,
burger_name varchar(30),
devoured boolean,
date_ timestamp,
primary key(ID)
)