SELECT CAST((FORMAT(MIN(P.valor_plano), 2)) AS CHAR) AS faturamento_minimo,
CAST((MAX(P.valor_plano)) AS CHAR) AS faturamento_maximo,
CAST((ROUND(AVG(P.valor_plano), 2)) AS CHAR) AS faturamento_medio,
CAST((ROUND(SUM(P.valor_plano),2)) AS CHAR) AS faturamento_total
FROM SpotifyClone.usuario AS U
INNER JOIN SpotifyClone.plano AS P
ON U.plano_id = P.plano_id;
-- https://www.w3schools.com/sql/func_mysql_cast.asp
