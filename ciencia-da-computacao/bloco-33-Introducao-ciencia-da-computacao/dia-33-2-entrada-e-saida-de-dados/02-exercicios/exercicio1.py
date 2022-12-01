# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida

# PEDRO
# PEDR
# PED
# PE
# P


def vertical_print(name):
    line = 0
    while line < len(name):
        newName = name.remove(name[-1])
        print(newName)
        line += 1


vertical_print("Augusto")
