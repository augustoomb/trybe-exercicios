class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador = None

    def comprar_liquidificador(self, liquidificador):
        if liquidificador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preco
            self.liquidificador = liquidificador

    # Uma forma de melhorar esta apresentação, é implementar o método __str__ para a classe que deseja imprimir. 
    # Assim o Python substituirá o print padrão pelo retorno que você desejar. 
    def __str__(self):
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta."
        # return f"""
        #  usando o f + 3 aspas,
        # dá pra quebrar linha dessa forma
        # """


liquidificador_vermelho = Liquidificador("Vermelho", 250, 220, 100)

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)
    
print(pessoa_cozinheira)
# retorno: Jacquin - possui 800 reais em sua conta.