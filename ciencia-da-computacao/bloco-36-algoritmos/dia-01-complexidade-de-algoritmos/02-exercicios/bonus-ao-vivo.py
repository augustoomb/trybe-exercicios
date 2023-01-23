# PROBLEMA: ELEMENTO APARECE MAIS QUE 25% DEM UM ARRAY ORDENADO

# DADO UMA COLEÇÃO DE NÚMEROS INTEIROS ORDENADOS EM ORDEM CRESCENTE, 
# TEM UM NUMERO INTEIRO QUE OCORRE MAIS DO QUE 25% DAS VEZES

# ANALISE A ORDEM DE COMPLEXIDADE DE TEMPO E ESPAÇO

def more_than_twenty_five_percent(array):
    twenty_five_percent = len(array) // 4
    seventy_five_percent = len(array) - twenty_five_percent

    for index, element in enumerate(array[:seventy_five_percent]):
        if element == array[index + twenty_five_percent]:
            return(element)
        
    return -1


# test1 = [1, 2, 2, 3, 3, 6, 6, 6, 6, 7, 10]
test1 = [1, 2, 3, 3, 3, 4, 6, 9, 11, 15, 20, 20, 25, 30, 35, 39]

print(more_than_twenty_five_percent(test1))