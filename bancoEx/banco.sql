create database RPG;

use RPG;

create table aventura(id int primary key auto_increment, nomeA varchar(50));

create table pers_DeD (id int primary key auto_increment, nomeP varchar(50), vidaMax int, aventura int, foreign key pers_DeD(aventura) references aventura(id));

insert into aventura values (null, 'Deuses');

insert into pers_DeD values (null, 'Leroy', 20, (select aventura.id from aventura where nomeA = 'Deuses'));

select * from pers_ded;