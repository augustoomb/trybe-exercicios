SELECT U.nome_usuario AS usuario,
COUNT(C.cancao_id) AS qtde_musicas_ouvidas,
ROUND((SUM(C.duracao_segundos) / 60), 2) AS total_minutos
FROM SpotifyClone.reproducao AS R 
INNER JOIN usuario AS U
ON R.usuario_id = U.usuario_id
INNER JOIN cancao AS C
ON R.cancao_id = C.cancao_id
GROUP BY R.usuario_id
ORDER BY U.nome_usuario;
