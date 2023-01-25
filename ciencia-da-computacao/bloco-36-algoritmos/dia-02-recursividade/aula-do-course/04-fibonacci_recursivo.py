# IMPLEMENTAR A SEQUENCIA FIBONACCI DE N DE FORMA RECURSIVA

def fibonacci_recursiva(n):
    if n < 2:
        return n
    else:
        return fibonacci_recursiva(n - 1) + fibonacci_recursiva(n - 2)


print(fibonacci_recursiva(5))