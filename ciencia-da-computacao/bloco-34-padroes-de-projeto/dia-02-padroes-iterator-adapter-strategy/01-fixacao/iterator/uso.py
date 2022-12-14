from DatabaseIterable import DatabaseIterable
from DbSimulator import DbSimulator


#USANDO
# Primeiro instanciamos o ITERÁVEL
record_paginator = DatabaseIterable(DbSimulator(), "select * from person")

# Em seguida podemos usar o for para iterar
# Nesse momento o ITERADOR é criado implicitamente
for page in record_paginator:
    # faz algo com a página, que é uma lista de resultados
    for record in page:
        print(record["name"])