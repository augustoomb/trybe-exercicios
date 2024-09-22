SELECT U.nome_usuario AS usuario,
IF(MAX(YEAR(R.data_reproducao)) = 2021, 'Usuário ativo', 'Usuário inativo') AS condicao_usuario
FROM SpotifyClone.reproducao AS R
INNER JOIN SpotifyClone.usuario AS U
ON R.usuario_id = U.usuario_id
GROUP BY R.usuario_id
ORDER BY U.nome_usuario;
