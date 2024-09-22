def is_palindrome_recursive(word, low_index, high_index):
    if word == '':
        return False
    if low_index == high_index:
        return True
    if low_index == high_index + 1:
        return True
    elif (word[low_index] != word[high_index]):
        return False
    else:
        return is_palindrome_recursive(word, low_index + 1, high_index - 1)

# ===========================
# Recebe como parâmetro: uma palavra qualquer;
# o primeiro indice da palavra, o ultimo indice da palavra

# A primeira condição testa se uma palavra em branco foi passada

# A segunda condição testa se ambos os índice são iguais.
# Sabendo que é uma função recursiva,
# estou incrementando e decrementando os valores
# de low_index e high_index, respectivamente.
# Nas linhas abaixo testarei sempre se low_index == high_index.
# Se chegar o momento em que os indices são iguais
# e o fluxo da função não caiu numa condição de
# word[low_index] != word[high_index], saberei com certeza que
# as demais letras são iguais e os valores
# de low_index e high_index se encontraram no meio do array(string).
# Essa condição valida apenas palavras
# com quantidade de caracteres impares, pois low_index e
# high_index se encontram bem no meio do array.

# A terceira condição tem a mesma ideia da condição anterior,
# mas testa palíndromos com quantidade
# de caracteres pares. Diferente do anterior,
# não haverá um indice exatamente no meio do arr.
# O que testei então foi se as duas posições mais
# próximas ao centro são iguais.

# o Else if testa se o (word[low_index]) e o word[high_index])
# são diferentes. Se uma unica vez forem
# diferentes, já é o suficiente para a palavra não ser um Palíndromo

# No Else, quando nenhuma das condições é atendida,
# há simplesmente a incrementação e decrementação
# dos valores de low_index e high_index, respectivamente
