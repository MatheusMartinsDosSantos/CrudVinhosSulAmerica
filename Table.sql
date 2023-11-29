create database senac2303;
use senac2303;

select tb_vinho;

CREATE TABLE tb_vinho (
	id		int primary key auto_increment,
    nm_vinho		varchar(100),
    ps_vinho		varchar(50),
    pr_vinho	double
);

ALTER TABLE tb_vinho RENAME COLUMN id_vinho TO id;

select * from tb_vinho;