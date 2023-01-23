# # iterativa:

# def countdown(n):
#     while n > 0:
#         print(n)
#         n = n - 1

#     print("FIM!")
    



# # recursiva

# def countdown_recursiva(n):
#     if n == 0:
#         print("FIM!")
#     else:
#         print(n)
#         countdown_recursiva(n - 1)



# outro exemplo recursivo: contagem regresiva partindo de n

# def contagem_regressiva(n):
#     if n == 0:
#         print("Fim")
#     else: 
#         print(n)       
#         contagem_regressiva(n-1)

# contagem_regressiva(5)
    


# fatorial de um numero n

# def fatorial(n):
#     if n == 1: # caso base
#         return 1
#     else:
#         return n * fatorial(n-1) # caso recursivo

# print(fatorial(5))






# algoritmo de soma:
# Exercício: Faça um algoritmo recursivo de soma.
# Esse algoritmo deve receber um número de parâmetro e deve somar
# todos os números antecessores a ele.

def soma(n):
    if n == 0:
        return 0
    else:
        return n + soma(n - 1)


print(soma(4))