# inverter a ordem de uma lista de forma recursiva

def inverter_lista(lista):
    if len(lista) <= 1:
        return lista
    else:
        return [lista[-1]] + inverter_lista(lista[:len(lista) - 1])

print(inverter_lista([1, 3, 5, 7]))