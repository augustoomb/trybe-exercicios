def somatorio_recursivo(num):
    if num == 0:
        return 0
    else:
        return num + somatorio_recursivo(num - 1)

print(somatorio_recursivo(6))

