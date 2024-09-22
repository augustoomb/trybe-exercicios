SELECT C.nome_cancao AS nome,
COUNT(R.usuario_id) AS reproducoes
FROM SpotifyClone.reproducao AS R
INNER JOIN SpotifyClone.cancao AS C
ON R.cancao_id = C.cancao_id
INNER JOIN SpotifyClone.usuario AS U
ON R.usuario_id = U.usuario_id
WHERE U.plano_id = 1 OR U.plano_id = 4
GROUP BY C.nome_cancao
ORDER BY C.nome_cancao;
