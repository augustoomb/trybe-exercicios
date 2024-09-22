SELECT ART.nome_artista AS artista, ALB.nome_album AS album FROM SpotifyClone.album AS ALB
INNER JOIN artista AS ART
ON ALB.artista_id = ART.artista_id
HAVING ART.nome_artista = 'Walter Phoenix'
ORDER BY ALB.nome_album;
