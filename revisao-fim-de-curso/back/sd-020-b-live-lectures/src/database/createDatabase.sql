CREATE DATABASE IF NOT EXISTS cartoon;

USE cartoon;

CREATE TABLE `Series` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `seasons` int DEFAULT NULL,
    `overview` text,
    `poster_path` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 457 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Casts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 199 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Characters` (
    `id` int NOT NULL AUTO_INCREMENT,
    `name` varchar(255) DEFAULT NULL,
    `serie_id` int DEFAULT NULL,
    PRIMARY KEY (`id`),
    KEY `serie_id` (`serie_id`),
    CONSTRAINT `Characters_ibfk_1` FOREIGN KEY (`serie_id`) REFERENCES `Series` (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE `Cast_Characters` (
    `cast_id` int DEFAULT NULL,
    `character_id` int DEFAULT NULL,
    KEY `cast_id` (`cast_id`),
    KEY `character_id` (`character_id`),
    CONSTRAINT `Cast_Characters_ibfk_1` FOREIGN KEY (`cast_id`) REFERENCES `Casts` (`id`),
    CONSTRAINT `Cast_Characters_ibfk_2` FOREIGN KEY (`character_id`) REFERENCES `Characters` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;

INSERT INTO
    `Series`
VALUES
    (
        456,
        'Os Simpsons',
        34,
        'Os Simpsons moram na cidade de  Springfield, uma cidade americana como qualquer outra. Homer trabalha como inspetor de segurança em uma usina de  energia nuclear, Marge tenta manter a paz em sua família, Bart é um  travesso garoto de 10 anos, Lisa, de 8 anos, é a inteligente da família que  adora tocar saxofone e é vegetariana e a pequena Maggie conquista todos  enquanto não larga sua chupeta. E a série tem um rico, e muitas vezes  estranho, universo de personagens que também habitam Springfield. Com roteiros inteligentes, humor subversivo e divertidamente  genial, a série faz piadas de si mesma e de todo mundo que aparecer em  seu caminho.',
        '/eMJYtdMmtiUI2WHYvoR0BmRGq51.jpg'
    );

INSERT INTO
    `Characters`
VALUES
    (1, 'Homer Simpson', 456);

INSERT INTO
    `Casts`
VALUES
    (198, 'Dan Castellaneta');

INSERT INTO
    `Cast_Characters`
VALUES
    (198, 1);