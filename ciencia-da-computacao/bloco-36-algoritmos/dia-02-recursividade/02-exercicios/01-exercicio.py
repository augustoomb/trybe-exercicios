#  Exercício 1: Crie um algoritmo não recursivo para contar quantos números
# pares existem em uma sequência numérica (1 a n).

def count_even_numbers(n):
    count = 0
    for number in range(n):
        if number % 2 == 0:
            count += 1

    return count    

print(count_even_numbers(10))

# gabarito:
# def conta_pares(n):
#     numero_de_pares = 0
#     for num in range(n+1):
#         if num % 2 == 0 and num != 0:
#             numero_de_pares += 1
#     return numero_de_pares