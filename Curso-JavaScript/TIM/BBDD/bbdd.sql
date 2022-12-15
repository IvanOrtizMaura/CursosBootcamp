create database TIM;
use TIM;
create table usuarios (
DNI varchar(10),
nombre varchar (255),
apellidos varchar (255), 
telefono varchar(9), 
direccion varchar(255),
nombreUser varchar (10),
contrasena varchar(255),
tipoUsuario varchar(255),
fechaNacimiento date,
administrador boolean
);
insert into usuarios (DNI, nombre, apellidos, telefono, direccion, nombreUser, contrasena, tipoUsuario, administrador) values('43209201K', 'Ivan', 'Ortiz Maura', '123456789', 'Calle aragon', 'Ivantiz45', '1234', 'Adulto',true );

insert into usuarios (DNI, nombre, apellidos, telefono, direccion, nombreUser, contrasena, tipoUsuario, administrador) values('43209202K', 'Carlos', 'Navarro Mena', '123456789', 'Calle aragon', 'Navaroo', '1234', 'Adulto',false );