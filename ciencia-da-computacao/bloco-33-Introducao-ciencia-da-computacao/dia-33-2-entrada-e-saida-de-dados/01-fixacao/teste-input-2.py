import sys

# https://www.alura.com.br/artigos/o-que-significa-if-name-main-no-python
# basicamente essa checagem do main é apenas para testar se estamos executando o arquivo como...
# ...uma importação ou se ele é local mesmo (+ - isso)
if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


# executar: python3 arquivo.py 2 4 "teste"

# A saída será:
# Received ->  arquivo.py
# Received ->  2
# Received ->  4
# Received ->  teste
