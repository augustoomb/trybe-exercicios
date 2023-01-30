# Exercício 4 Você têm dois arrays de números inteiros que representam:
# (I) instantes de entrada e saídas em uma biblioteca
# (II) um número que represente um instante a ser buscado.
# Retorne quantas pessoas estudantes estão na biblioteca naquele instante.
# Considere que todo estudante que entrou e saiu da biblioteca.

# entradas = [1, 2, 3]
# saídas = [3, 2, 7]
# instante_buscado = 4
# resultado: 1

# O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
# e saiu no 2 e o último foi único a estar presente no instante 4.

def check_study_schedule(entry_list, out_list, search):
    count_students = 0
    for index in range(len(entry_list)):
        if entry_list[index] <= search <= out_list[index]:
            count_students += 1

    return count_students


entradas = [1, 2, 3]
saidas = [3, 2, 7]
instante_buscado = 4

print(check_study_schedule(entradas, saidas, instante_buscado))