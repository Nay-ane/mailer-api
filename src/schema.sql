create database newsletter_cubos;

drop table if exists subscribes;

create table subscribes (
    id serial primary key,
    name varchar(255) not null,
    email varchar(120) not null,
);

