# Exercício 1 - Blefe
# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número que a outra irá escolher.
# Cada jogador escolhe 5 números de 0 a 10, inclusive.
# A pontuação final é calculada da seguinte forma:

#     A nota de partida de cada pessoa é o maior número que a outra pessoa não escolheu;
#     O redutor é o menor numero que a outra pessoa não escolheu;
#     A pontuação final é a nota de partida - redutor.


# Exemplo: 

#     clara = [0, 1, 5, 9, 10]
#     # nota de partida: 5
#     # redutor: 1
#     # pt: 4

#     marco = [0, 2, 8, 9, 10]
#     # nota de partida: 8
#     # redutor: 2
#     # pt individual: 6

#     # Quem ganhou: Marco


# Implemente uma função que receba um dicionário com os nomes e
# números chutados e retorne o nome de quem ganhou.


# entrada = {
#     'Clara': [0, 1, 5, 9, 10],
#     'Marco': [0, 2, 8, 9, 10]
# }

# # saída: 'Marco'


# Faça a análise de complexidade da sua solução.


def blefe(dict_nums):
    # list(dict_nums.keys())[0]

    conj_base = set(range(0, 11))

    arr_nums_pessoa1 = list(dict_nums.values())[0]
    arr_nums_pessoa2 = list(dict_nums.values())[1]

    conj_nums_pessoa1 = set(arr_nums_pessoa1)
    conj_nums_pessoa2 = set(arr_nums_pessoa2)

    # DIFERENÇA ENTRE O CONJ DE NUMEROS DAS PESSOAS E UM SET DE 0 A 10 COMPLETO
    dif1 = conj_base.difference(conj_nums_pessoa1)
    dif2 = conj_base.difference(conj_nums_pessoa2)

    nota_p1 = max(dif2)
    nota_p2 = max(dif1)

    redutor_p1 = min(dif2)
    redutor_p2 = min(dif1)

    pontuacao_p1 = nota_p1 - redutor_p1
    pontuacao_p2 = nota_p2 - redutor_p2

    if pontuacao_p1 > pontuacao_p2:
        return list(dict_nums.keys())[0]
    
    else:
        return list(dict_nums.keys())[1]


if __name__ == "__main__":
    entrada = {
        'Clara': [0, 1, 5, 9, 10],
        'Marco': [0, 2, 8, 9, 10]
    }

    print(blefe(entrada))





# -------------------------------GABARITO--------------------------------------------

# nota da partida
# def nota_partida(escolhas, adivinhas):
#     return max(escolhas.difference(adivinhas))


# def nota_redutor(escolhas, adivinhas):
#     return min(escolhas.difference(adivinhas))


# def nota_individual(escolhas, adivinhas):
#     set_escolhas = set(escolhas)
#     set_adivinhas = set(adivinhas)

#     return nota_partida(set_escolhas, set_adivinhas) - nota_redutor(
#         set_escolhas, set_adivinhas
#     )


# def quem_ganhou_blefe(jogadas):
#     jogadores = list(jogadas.keys())

#     primeira_nota = nota_individual(
#         jogadas[jogadores[0]], jogadas[jogadores[1]]
#     )

#     segunda_nota = nota_individual(
#         jogadas[jogadores[1]], jogadas[jogadores[0]]
#     )

#     if primeira_nota > segunda_nota:
#         return jogadores[0]
#     elif primeira_nota < segunda_nota:
#         return jogadores[1]
#     else:
#         return None


# quem_ganhou = quem_ganhou_blefe(entrada)

# if quem_ganhou:
#     print(f"Quem ganhou: {quem_ganhou} ")
# else:
#     print("Deu empate")