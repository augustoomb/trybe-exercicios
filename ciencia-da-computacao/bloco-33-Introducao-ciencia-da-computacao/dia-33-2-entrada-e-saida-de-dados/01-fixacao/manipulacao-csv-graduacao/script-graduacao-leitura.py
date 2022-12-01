import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

print(data)


# Explicação: header, *data = graduacao_reader

# Tudo o que está na direita é atribuído à variável da esquerda (antes do =)
# No caso, como são 2 variáveis, header recebe o primeiro elemento de graduacao_reader
# "data" recebe o restante. O * diz que data formará uma lista com esses dados.
# Faz sentido, já que nesse csv, a primeira linha é só um cabeçalho, que não me interessa no momento
