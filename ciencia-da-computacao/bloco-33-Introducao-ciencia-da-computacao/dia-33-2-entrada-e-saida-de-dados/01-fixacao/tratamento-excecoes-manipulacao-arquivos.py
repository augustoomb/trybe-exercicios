# # modo leitura
# try:
#     arquivo = open("arquivo.txt", "r")
# except OSError:
#     # será executado caso haja uma exceção
#     print("arquivo inexistente")
# else:
#     # será executado se tudo ocorrer bem no try
#     print("arquivo manipulado e fechado com sucesso")
#     arquivo.close()
# finally:
#     # será sempre executado, independentemente de erro
#     print("Tentativa de abrir arquivo")


# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")

# como estamos fora do contexto, o arquivo foi fechado
# aqui no print vai mostrar True, já que o arquivo já foi fechado, pois parei de executar comandos com o "file". O programa entendeu que terminei de executar comandos para o arquivo
print(file.closed)
