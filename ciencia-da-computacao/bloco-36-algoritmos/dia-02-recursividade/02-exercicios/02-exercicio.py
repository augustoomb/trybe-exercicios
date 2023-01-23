# Exercício 2: Transforme o algoritmo criado no ex1 em recursivo.

def recursive_counter_even_numbers(n):    
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + recursive_counter_even_numbers(n-1)
    else:
        return recursive_counter_even_numbers(n-1)