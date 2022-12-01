# posso usar o load ou o loads

# 1- O loads carrega o JSON a partir de um texto

import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)[
        "results"
    ]  # o conteúdo é transformado em estrutura python equivalente, dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista


# 2 - o load carrega o JSON a partir de um arquivo

import json


with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista
