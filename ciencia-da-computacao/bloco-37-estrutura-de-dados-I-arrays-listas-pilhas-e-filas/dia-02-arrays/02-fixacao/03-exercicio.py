# Exercício 3 Imagine que você esteja trabalhando em um e-commerce,
# e foi lhe dado a demanda de analisar um array de números inteiros
# que representam os produtos dessa empresa.
# Verifique quantos produtos formam boas combinações, ou seja,
# quando um produto é igual ao outro e seu índice é maior que o anterior.
# Esta combinação pode ser utilizada para modificar os produtos de uma página. Por exemplo:

# Exemplo 1:
# produtos = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
# produtos = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def check_combination(list_products):
    list_combinations = []

    for index1 in range((len(list_products))):
        for index2 in range((len(list_products))):
            if (list_products[index1] == list_products[index2] and index2 > index1):
                list_combinations.append((index1, index2))


    return list_combinations


print(check_combination([1, 3, 1, 1, 2, 3]))
print(check_combination([1, 1, 2, 3]))

# Complexidade O(n²)