from statistics import mean

# exercício 1


def maior_numero(num1, num2):
    return max(num1, num2)


# exercício 2

def media_aritmetica(lista):
    return mean(lista)


# exercício 3

def imprimir_quadrado_de_asteriscos(num):
    for index in range(num):
        print("*"*num)


# exercício 4

def maior_nome(lista_nomes):
    maior = (lista_nomes[0])
    for nome in lista_nomes:
        if len(nome) > len(maior):
            maior = nome
    return maior


# print("Ex1: O maior número é: ")
# print(maior_numero(50, 6))
# print("\n")
# print("Ex2: O média aritm é: ")
# print(media_aritmetica([12, 45, 78, 36, 45, 237.11, -1, 88]))
# imprimir_quadrado_de_asteriscos(5)


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
