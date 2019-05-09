create database RPG;

use RPG;

create table aventura(id int primary key Identity , nomeA varchar(50));

create table pers_DeD (id int primary key Identity, nomeP varchar(50),
Vidamax int, AC int, Srt int, Dex int, Con int, Inte Int, Wis int, Cha int, LVL int, 
Notas varchar (255), 
aventura int);
ALTER TABLE pers_DeD ADD FOREIGN KEY ( id ) REFERENCES aventura ( id );
