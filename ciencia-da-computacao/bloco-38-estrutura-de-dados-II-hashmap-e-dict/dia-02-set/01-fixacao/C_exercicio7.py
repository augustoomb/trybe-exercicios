# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe!
# Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir
# adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado.
# Precisamos saber como está o andamento da entrega das listas.
# Para isso, você tem acesso aos nomes das pessoas da turma,
# bem como ao log de quem já entregou qual lista. A partir das listas abaixo,
# utilize a classe já criada e imprima os resultados das perguntas abaixo:

from A_conjunto import Conjunto




# Quem ainda não entregou a lista1?

if __name__ == "__main__":
    conj_estudantes = Conjunto()
    conj_list1 = Conjunto()
    conj_list2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1 = [1, 4, 7, 3] # lista1_entregues
    lista2 = [3, 1, 6] # lista2_entregues

    for item in estudantes:
        conj_estudantes.add(item)

    for item in lista1:
        conj_list1.add(item)

    for item in lista2:
        conj_list2.add(item)

    nao_entregaram_lista1 = conj_estudantes.difference(conj_list1)
    nao_entregaram_lista2 = conj_estudantes.difference(conj_list2)

    
    print(nao_entregaram_lista1.intersection(nao_entregaram_lista2))


# Quem já entregou as duas listas?

# Quem já entregou qualquer uma das duas listas?

# Quem ainda não entregou nenhuma das listas?