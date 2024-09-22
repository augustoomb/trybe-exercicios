DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

CREATE TABLE SpotifyClone.artista(
    artista_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome_artista VARCHAR(255) NOT NULL
) engine = InnoDB;

CREATE TABLE SpotifyClone.album(
    album_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome_album VARCHAR(255) NOT NULL,
    ano_album YEAR,
    artista_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES SpotifyClone.artista (artista_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.cancao(
    cancao_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome_cancao VARCHAR(255) NOT NULL,
    duracao_segundos INT,
    artista_id INT NOT NULL,
    album_id INT NOT NULL,
    FOREIGN KEY (artista_id) REFERENCES SpotifyClone.artista (artista_id),
    FOREIGN KEY (album_id) REFERENCES SpotifyClone.album (album_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.plano(
    plano_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- data_assinatura DATE,
	nome_plano VARCHAR(255) NOT NULL,
    valor_plano DOUBLE
) engine = InnoDB;

-- CREATE TABLE SpotifyClone.assinatura(
--     id_assinatura INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 	data_assinatura DATE,
--     plano_id INT NOT NULL,
--     FOREIGN KEY (plano_id) REFERENCES SpotifyClone.plano (plano_id)
-- ) engine = InnoDB;

CREATE TABLE SpotifyClone.usuario(
    usuario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome_usuario VARCHAR(255) NOT NULL,
    idade_usuario INT,
    plano_id INT NOT NULL,
    FOREIGN KEY (plano_id) REFERENCES SpotifyClone.plano (plano_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.reproducao(
	data_reproducao DATETIME,
	cancao_id INT NOT NULL,
    usuario_id INT NOT NULL,	
    PRIMARY KEY (cancao_id, usuario_id),
    FOREIGN KEY (cancao_id) REFERENCES SpotifyClone.cancao (cancao_id),
    FOREIGN KEY (usuario_id) REFERENCES SpotifyClone.usuario (usuario_id)
) engine = InnoDB;

CREATE TABLE SpotifyClone.usuario_seguindo_artista(
    usuario_id INT NOT NULL,
    artista_id INT NOT NULL,
    PRIMARY KEY (usuario_id, artista_id),
    FOREIGN KEY (usuario_id) REFERENCES SpotifyClone.usuario (usuario_id),
    FOREIGN KEY (artista_id) REFERENCES SpotifyClone.artista (artista_id)
) engine = InnoDB;

INSERT INTO SpotifyClone.artista (nome_artista)
VALUES
	('Walter Phoenix'),
	('Peter Strong'),
	('Lance Day'),
	('Freedie Shannon'),
	('Tyler Isle'),
	('Fog');
    
INSERT INTO SpotifyClone.album (nome_album, ano_album, artista_id)
VALUES
    ('Envious', 1990, 1),
    ('Exuberant', 1993, 1),
    ('Hallowed Steam', 1995, 2),
    ('Incandescent', 1998, 3),
    ('Temporary Culture', 2001, 4),
    ('Library of liberty', 2003, 4),
    ('Chained Down', 2007, 5),
    ('Cabinet of fools', 2012, 5),
    ('No guarantees', 2015, 5),
    ('Apparatus', 2015, 6);
    
INSERT INTO SpotifyClone.cancao (nome_cancao, duracao_segundos, artista_id, album_id)
VALUES
    ('Soul For Us', 200, 1, 1),
    ('Reflections Of Magic', 163, 1, 1),
    ('Dance With Her Own', 116, 1, 1),
    ('Troubles Of My Inner Fire', 203, 1, 2),
    ('Time Fireworks', 152, 1, 2),
    ('Magic Circus', 105, 2, 3),
    ('Honey, So Do I', 207, 2, 3),
    ('Sweetie, Let''s Go Wild', 139, 2, 3),
    ('She Knows', 244, 2, 3),
    ('Fantasy For Me', 100, 3, 4),
    ('Celebration Of More', 146, 3, 4),
    ('Rock His Everything', 223, 3, 4),
    ('Home Forever', 231, 3, 4),
    ('Diamond Power', 241, 3, 4),
    ('Let''s Be Silly', 132, 3, 4),
    ('Thang Of Thunder', 240, 4, 5),
    ('Words Of Her Life', 185, 4, 5),
    ('Without My Streets', 176, 4, 5),
    ('Need Of The Evening', 190, 4, 6),
    ('History Of My Roses', 222, 4, 6),
    ('Without My Love', 111, 4, 6),
    ('Walking And Game', 123, 4, 6),
    ('Young And Father', 197, 4, 6),
    ('Finding My Traditions', 179, 5, 7),
    ('Walking And Man', 229, 5, 7),
    ('Hard And Time', 135, 5, 7),
    ('Honey, I''m A Lone Wolf', 150, 5, 7),
    ('She Thinks I Won''t Stay Tonight', 166, 5, 8),
    ('He Heard You''re Bad For Me', 154, 5, 8),
    ('He Hopes We Can''t Stay', 210, 5, 8),
    ('I Know I Know', 117, 5, 8),
    ('He''s Walking Away', 159, 5, 9),
    ('He''s Trouble', 138, 5, 9),
    ('I Heard I Want To Bo Alone', 120, 5, 9),
    ('I Ride Alone', 151, 5, 9),
    ('Honey', 79, 6, 10),
    ('You Cheated On Me', 95, 6, 10),
    ('Wouldn''t It Be Nice', 213, 6, 10),
    ('Baby', 136, 6, 10),
    ('You Make Me Feel So..', 83, 6, 10);
    
INSERT INTO SpotifyClone.plano (nome_plano, valor_plano)
VALUES
		('gratuito', 0.00),
		('familiar', 7.99),
		('universitário', 5.99),
		('pessoal', 6.99);
	-- ('2019-10-20', 'gratuito', 0.00),
--     ('2017-12-30', 'familiar', 7.99),
--     ('2019-06-05', 'universitário', 5.99),
--     ('2020-05-13', 'pessoal', 6.99),
--     ('2017-02-17', 'pessoal', 6.99),
--     ('2017-01-06', 'familiar', 7.99),
--     ('2018-01-05', 'universitário', 5.99),
--     ('2018-02-14', 'universitário', 5.99),
--     ('2018-04-29', 'familiar', 7.99),
--     ('2017-01-17', 'familiar', 7.99);
    
-- INSERT INTO SpotifyClone.assinatura (data_assinatura, plano_id)
-- VALUES
--     ('2019-10-20', 1),
--     ('2017-12-30', 2),
--     ('2019-06-05', 3),
--     ('2020-05-13', 4),
--     ('2017-02-17', 4),
--     ('2017-01-06', 2),
--     ('2018-01-05', 3),
--     ('2018-02-14', 3),
--     ('2018-04-29', 2),
--     ('2017-01-17', 2);

INSERT INTO SpotifyClone.usuario (nome_usuario, idade_usuario, plano_id)
VALUES
	('Thati', 23, 1),
	('Cintia', 35, 2),
	('Bill', 20, 3),
	('Roger', 45, 4),
	('Norman', 58, 4),
	('Patrick', 33, 2),
	('Vivian', 26, 3),
	('Carol', 19, 3),
	('Angelina', 42, 2),
	('Paul', 46, 2);
    
INSERT INTO SpotifyClone.reproducao (data_reproducao, cancao_id, usuario_id)
VALUES
    ('2020-02-28 10:45:55', 36, 1),
    ('2020-05-02 05:30:35', 25, 1),
    ('2020-03-06 11:22:33', 23, 1),
    ('2020-08-05 08:05:17', 14, 1),
    ('2020-09-14 16:32:22', 15, 1),
    ('2020-01-02 07:40:33', 34, 2),
    ('2020-05-16 06:16:22', 24, 2),
    ('2020-10-09 12:27:48', 21, 2),
    ('2020-09-21 13:14:46', 39, 2),
    ('2020-11-13 16:55:13', 6, 3),
    ('2020-12-05 18:38:30', 3, 3),
    ('2020-07-30 10:00:00', 26, 3),
    ('2021-08-15 17:10:10', 2, 4),
    ('2021-07-10 15:20:30', 35, 4),
    ('2021-01-09 01:44:33', 27, 4),
    ('2020-07-03 19:33:28', 7, 5),
    ('2017-02-24 21:14:22', 12, 5),
    ('2020-08-06 15:23:43', 14, 5),
    ('2020-11-10 13:52:27', 1, 5),
    ('2019-02-07 20:33:48', 38, 6),
    ('2017-01-24 00:31:17', 29, 6),
    ('2017-10-12 12:35:20', 30, 6),
    ('2018-05-29 14:56:41', 22, 6),
    ('2018-05-09 22:30:49', 5, 7),
    ('2020-07-27 12:52:58', 4, 7),
    ('2018-01-16 18:40:43', 11, 7),
    ('2018-03-21 16:56:40', 39, 8),
    ('2020-10-18 13:38:05', 40, 8),
    ('2019-05-25 08:14:03', 32, 8),
    ('2021-08-15 21:37:09', 33, 8),
    ('2021-05-24 17:23:45', 16, 9),
    ('2018-12-07 22:48:52', 17, 9),
    ('2021-03-14 06:14:26', 8, 9),
    ('2020-04-01 03:36:00', 9, 9),
    ('2017-02-06 08:21:34', 20, 10),
    ('2017-12-04 05:33:43', 21, 10),
    ('2017-07-27 05:24:49', 12, 10),
    ('2017-12-25 01:03:57', 13, 10);
    
INSERT INTO SpotifyClone.usuario_seguindo_artista (usuario_id, artista_id)
VALUES
    (1, 1),
    (1, 4),
    (1, 3),
    (2, 1),
    (2, 3),
    (3, 2),
    (3, 1),
    (4, 4),
    (5, 5),
    (5, 6),
    (6, 6),
    (6, 3),
    (6, 1),
    (7, 2),
    (7, 5),
    (8, 1),
    (8, 5),
    (9, 6),
    (9, 4),
    (9, 3),
    (10, 2),
    (10, 6);

-- INSERT INTO SpotifyClone.tabela2 (coluna1, coluna2)
-- VALUES
--   ('exemplo de dados 1', 'exemplo de dados X'),
--   ('exemplo de dados 2', 'exemplo de dados Y');
