CREATE DATABASE IF NOT EXISTS `movies-api`;
USE `movies-api`;

CREATE TABLE `movies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(40) NOT NULL,
  `directedBy` varchar(40) NOT NULL,
  `releaseYear` int(4) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO `movies` (title, directedBy, releaseYear) VALUES  
('Homem-aranha: Sem volta para casa', 'Jon Watts', 2022),
('Uncharted: Fora do Mapa', 'Ruben Fleischer', 2022),
('Velozes e Furiosos 9', 'Justin Lin', 2021);