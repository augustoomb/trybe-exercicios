SELECT C.nome_cancao AS cancao, COUNT(R.usuario_id) AS reproducoes FROM SpotifyClone.reproducao AS R
INNER JOIN SpotifyClone.cancao AS C
ON R.cancao_id = C.cancao_id
GROUP BY R.cancao_id
ORDER BY reproducoes DESC, C.nome_cancao
LIMIT 2;
