DROP DATABASE IF EXISTS jwt_db;

CREATE DATABASE IF NOT EXISTS jwt_db;

USE jwt_db;

CREATE TABLE IF NOT EXISTS users (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS phrases (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  author_id INT NOT NULL,
  phase VARCHAR(200),
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO
  users (id, username, password)
VALUES
  (1, "zambs", "123456"),
  (2, "tatis", "123456");

INSERT INTO
  phrases (author_id, phase)
VALUES
  (1, "E ai pessoal, ficou nítido"),
  (2, "Olaaaaaaaaa pessoal"),
  (2, "Tchu tchu tchu ...");