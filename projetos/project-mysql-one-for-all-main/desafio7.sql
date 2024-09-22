SELECT ART.nome_artista AS artista,
ALB.nome_album AS album,
COUNT(USA.usuario_id) AS seguidores
FROM SpotifyClone.artista AS ART
INNER JOIN usuario_seguindo_artista AS USA
ON ART.artista_id = USA.artista_id
INNER JOIN album AS ALB
ON ART.artista_id = ALB.artista_id
GROUP BY ALB.nome_album,
ART.nome_artista
ORDER BY seguidores DESC,
artista, album;


