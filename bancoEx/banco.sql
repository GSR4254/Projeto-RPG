create database RPG;

use RPG;

create table aventura(id int primary key Identity , nomeA varchar(50));

create table pers_DeD (id int primary key Identity, nomeP varchar(50),
Vidamax int, AC int, Srt int, Dex int, Con int, Inte Int, Wis int, Cha int);

--insert into aventura values (null, 'Deuses');

--insert into pers_DeD values (null, 'Leroy', 20, (select aventura.id from aventura where nomeA = 'Deuses'));

--select * from pers_ded;