class G3000LoaderAdapter:
    # aqui o loader é uma instância do gerenciator3000.ReportLoader original
    def __init__(self, loader):
        self.loader = loader

    def load_data(self):

        # Em python, o zip() junta uma lista de chaves em uma lista de valores
        # e permite criar dicionário! Por exemplo:
        # dict(zip(['nome', 'idade'], ['Juliana', 27]))
        # {'nome': 'Juliana', 'idade': 27}

        data = []
        for row in self.loader.rows:
            data.append(dict(zip(self.loader.headers, row)))
        return data