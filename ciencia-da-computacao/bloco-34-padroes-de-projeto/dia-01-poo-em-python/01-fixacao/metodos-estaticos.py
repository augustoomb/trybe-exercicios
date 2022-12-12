#Observe que dá pra acessar o método estático tanto a partir da classe quanto a partir do objeto.


class Classe:
    @staticmethod
    def método_estático():
        print("Olá")


objeto = Classe()
Classe.método_estático()
objeto.método_estático()
# Saída:
# Olá
# Olá