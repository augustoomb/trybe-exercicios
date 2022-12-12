class A:
    def faz_algo(self, valor):
        print(valor)


# significa que B herda tudo o que A possui
class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        #A.faz_algo(self, valor=1)

        # Faz o mesmo que a linha 12, porém, a forma abaixo é mais recomendada, pois evita acomplamento (ver explicação no cap)
        super().faz_algo(valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1