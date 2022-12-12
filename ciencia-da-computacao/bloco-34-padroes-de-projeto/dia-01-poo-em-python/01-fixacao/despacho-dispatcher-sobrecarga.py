import functools


@functools.singledispatch # decorando a função para criar um dispatcher
def func(parâmetro):
    print(parâmetro)


@func.register(int) # passando um tipo para o registrador do dispatcher
def _(parâmetro): # observe que o nome da função é irrelevante
    print(parâmetro * 2)


@func.register # NÃO passando o tipo para o registrador
def _(parâmetro: float): # mas passando o tipo como type hint
    print(parâmetro * 5)


func(4) # saída: 8
func(4.0) # saída: 20.0
func("4") # saída: 4


#No exemplo acima, chamar func com qualquer parâmetro que não seja do tipo int ou float vai chamar a função original.

#Apesar de ser bem legal, temos um problema: como o nome sugere (singledispatch significa despacho único), 
# eles servem para realizar a sobrecarga de somente 1 parâmetro. 
# Para fazer isso com vários parâmetros, precisamos de um multipledispatch, 
# que não existe na biblioteca padrão (mas existem bibliotecas externas que fazem isso).