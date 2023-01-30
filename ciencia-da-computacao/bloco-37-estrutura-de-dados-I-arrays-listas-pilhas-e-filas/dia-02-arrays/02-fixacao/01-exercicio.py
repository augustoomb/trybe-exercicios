# Exercício 1 Em um software monitor, o qual verifica a resiliência de outro software,
# precisamos saber o tempo máximo que um software permaneceu sem instabilidades.
# Para isto, a cada hora é feito uma requisição ao sistema para verificamos se está tudo bem.
# Supondo um array que contenha os estados coletados por nosso software,
# calcule quanto tempo máximo que o servidor permaneceu sem instabilidades.

# 1 - OK
# 0 - Instabilidades

# valores_coletados = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

# valores_coletados = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4

def count_time_up(list_status):
    count = 0
    max = 0
    for status in list_status:
        if status == 1:
            count += 1
        elif count > max:
            max = count
            count = 0

    return max

valores_coletados_1 = [0, 1, 1, 1, 0, 0, 1, 1]
valores_coletados_2 = [1, 1, 1, 1, 0, 0, 1, 1]

print(count_time_up(valores_coletados_1))
print(count_time_up(valores_coletados_2))


# COMPLEXIDADE É O(n), pois há um for que percorre toda a estrutura.