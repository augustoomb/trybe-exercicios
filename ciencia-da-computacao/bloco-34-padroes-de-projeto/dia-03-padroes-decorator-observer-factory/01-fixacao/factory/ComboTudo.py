class ComboTudo(Combo):
    def criar_combo(self):
        self.adicionar_itens(ItemHamburger())
        self.adicionar_itens(ItemSorvete())
        self.adicionar_itens(ItemFritas())
        self.adicionar_itens(ItemRefrigerante())