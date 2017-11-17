use burgers_db;
insert into burgers(burger_name,devoured,date_) values(
'Hamburger',false,now()
);
insert into burgers(burger_name,devoured,date_) values(
'Chessburger',false,now()
);
insert into burgers(burger_name,devoured,date_) values(
'Chickenburger',false,now()
);
TRUNCATE TABLE burgers;
create database blogger;