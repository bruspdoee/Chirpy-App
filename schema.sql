DROP DATABASE IF EXISTS chirpy;
CREATE DATABASE chirpy; 
USE chirpy; 

CREATE TABLE chirps (
id INT(10) NOT NULL AUTO_INCREMENT, 
author VARCHAR(45) NOT NULL, 
chirp VARCHAR(45) NOT NULL, 
time DATETIME NOT NULL, 
PRIMARY KEY (id)
);