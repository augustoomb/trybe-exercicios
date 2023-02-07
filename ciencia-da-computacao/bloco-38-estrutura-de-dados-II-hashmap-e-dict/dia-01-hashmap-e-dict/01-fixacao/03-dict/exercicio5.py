# Exercício 5: Consulte a forma de se criar um dicionário chamado de dict
# comprehension e crie um dicionário que mapeia inteiros de 3 a 20 para o seu dobro.

def dict_comprehension():
    my_dict = {elemento: elemento * 2 for elemento in range(3, 20)}
    return my_dict

print(dict_comprehension())