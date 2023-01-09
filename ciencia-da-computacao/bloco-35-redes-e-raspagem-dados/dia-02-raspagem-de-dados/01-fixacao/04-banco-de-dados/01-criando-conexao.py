# Após a instalação (python3 -m pip install pymongo)
# vamos ver como podemos realizar a escrita e leitura
# neste banco de dados. O primeiro passo é criar uma conexão com o banco
# de dados e isto pode ser feito da seguinte maneira:

from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
client = MongoClient()